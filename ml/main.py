
import json
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
from pydantic import BaseModel
import pandas as pd
import gzip
import torch
import string

from transformers import RobertaTokenizer, RobertaForMaskedLM
roberta_tokenizer = RobertaTokenizer.from_pretrained('roberta-base')
roberta_model = RobertaForMaskedLM.from_pretrained('roberta-base').eval()
top_k = 10

app = FastAPI()

clf = pickle.load(open("sentiment.pkl",'rb'))
vectorizer = pickle.load(open("transform.pkl", "rb"))
df = pd.read_csv("medium_articles_cleaned.csv")
with gzip.open('sim.pklz', 'rb') as ifp:
    sim = pickle.load(ifp)

from summarizer import Summarizer
model = Summarizer()

@app.get("/api/home")
async def Home():
    return {"message": "Hello World"}

    
class SentimentModel(BaseModel):
    comments: List[str]

class RecommendModel(BaseModel):
    index: int

class NextWordModel(BaseModel):
    text: str

class SummerizerModel(BaseModel):
    text: str

@app.post("/api/sentiment")
async def Sentiment(body: SentimentModel):
    result = []
    for c in body.comments:
        p = clf.predict(vectorizer.transform([c]))[0]
        if(p == 1):
            result.append(1)
        else:
            result.append(0)
    return {"result": result}

@app.post("/api/recommend")
async def Recommend(body: RecommendModel):
    result = recommend(body.index)
    res = {}
    res['result'] = []
    for i in result:
        res["result"].append(i.item())
    return res


def recommend(index):
    ind = df[df['index'] == index].index[0]
    distances = sorted(
        list(enumerate(sim[ind])), reverse=True, key=lambda x: x[1])
    rec = [df.iloc[i[0]]['index'] for i in distances[1:11]]
    return rec

# ------ Next word suggestion ------

@app.post("/api/nextword")
async def NextWord(body: NextWordModel):
    text = body.text + ' <mask>'
    result = get_next_predictions(text)
    print(result)
    return result

def decode(tokenizer, pred_idx, top_clean):
    ignore_tokens = f'{string.punctuation}[PAD]'
    tokens = []
    for w in pred_idx:
        token = ''.join(tokenizer.decode(w).split())
        if token not in ignore_tokens:
            tokens.append(token.replace('##', ''))
    return '\n'.join(tokens[:top_clean])


def encode(tokenizer, text_sentence, add_special_tokens=True):
    text_sentence = text_sentence.replace('<mask>', tokenizer.mask_token)
    # if <mask> is the last token, append a "." so that models dont predict punctuation.
    if tokenizer.mask_token == text_sentence.split()[-1]:
        text_sentence += ' .'

    input_ids = torch.tensor([tokenizer.encode(text_sentence, add_special_tokens=add_special_tokens)])
    mask_idx = torch.where(input_ids == tokenizer.mask_token_id)[1].tolist()[0]
    return input_ids, mask_idx

from transformers import ElectraTokenizer, ElectraForMaskedLM
electra_tokenizer = ElectraTokenizer.from_pretrained('google/electra-small-generator')
electra_model = ElectraForMaskedLM.from_pretrained('google/electra-small-generator').eval()

def get_next_predictions(text_sentence, top_clean=5):
    # ========================= ELECTRA =================================
    input_ids, mask_idx = encode(electra_tokenizer, text_sentence, add_special_tokens=True)
    with torch.no_grad():
        predict = electra_model(input_ids)[0]
    electra = decode(electra_tokenizer, predict[0, mask_idx, :].topk(top_k).indices.tolist(), top_clean)
    words = electra.split('\n')
    return { 'result': words}

print(get_next_predictions('I am a good <mask>'))

# ------ summery ------

body = '''
        I’ve spent most of my life as an anti-vegetable carboholic.  For years, processed snack foods ruled the kitchen kingdom of my household and animal products outnumbered plant-based offerings. My transformation began with my mom’s cancer diagnosis. My mom went on a 100% whole food plant-based diet. I fully embraced this new eating philosophy to show my support. Eager to figure out the whole “vegan” thing, the two of us started binge-watching health documentaries such as “What the Health” and “Forks Over Knives”. We read all the books by the featured doctors like “The China Study” and “How Not To Die”. I became entranced by the world of nutritional science and how certain foods could help prevent cancer or boost metabolism. Each new food I discovered gave me an education on the role diet plays on health. I learned that, by eating sweet potatoes and brown rice, you could cure acne and heart disease. I discovered eating leafy greens with citrus fruits could boost iron absorption rates. I loved pairing my foods to create the perfect macronutrient balance. Did you know beans and rice make a complete protein? Food has also turned me into a sustainability nut. Living plant-based also saves the planet from the impact of animal agriculture. For the same amount of land space, a farmer can produce 200 kilograms of soybeans versus 16 kilograms of beef. I do my part to have as small of an ecological footprint as I can. I stopped using plastic snack bags and instead turned to reusable beeswax wraps. My favorite reusable appliance is my foldable straw. If I am going to nourish my body, shouldn’t I also want to nourish the earth?  My journey toward healthy living led me to becoming co-leader of the Northern Nevada PlantPure Pod, “Biggest Little Plant Pod”, a group dedicated to spreading the message about the whole food plant-based lifestyle. We are currently working on a restaurant campaign to encourage local eateries to create a plant-based, oil-free menu option and become PlantPure certified. After discovering how many restaurants use oil in their cooking, I decided I needed to open a plant-based oil free cafe to make up for this gap. My dream is to open up my very own affordable oatmeal cafe based on my Instagram page, morning_mOATivations. And I know that oatmeal isn’t the sexiest superfood out there, so here’s my sales pitch: I’m going to make oatmeal the Beyonce of the breakfast world- sweet, sassy, and power packed. This allows me to educate people about nutritional science through the stomach. Finally, I am a strong proponent of hands-on experience for learning what good food looks and tastes like, so cooking is one of my favorite ways to teach the benefits of a plant-based lifestyle. Using my taste buds as my textbook to learn which flavors work together and which ones don’t helps me educate, as I’ve found that information tends to stick in a person’s mind once they’ve experienced healthy, delicious foods with their own senses. Our society has taught us that delicious food has to make us feel guilty, when that is simply not the case. The best feeling in the world is falling in love with a dish and then learning all the health benefits that it provides the body. While my classmates complain about being tired, I have more energy because my body is finally getting the right macros, vitamins, and minerals it needs. This has allowed me to push myself harder physically, excelling in running and earning my high school Cross Country team’s Most Improved award. I’m still a picky eater. But the foods I am particular about have changed. Rather than a carboholic, I choose to call myself a vegeholic.
        '''

@app.post("/api/summarizer")
async def Summarizer(body: SummerizerModel):
    result = summarizer_bert(body.text)
    print(result)
    return {"result": result}

def summarizer_bert(text):
    result = model(text, min_length=30)
    full = ''.join(result)
    return full

print(summarizer_bert(body))