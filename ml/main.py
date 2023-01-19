
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

@app.get("/api/home")
async def Home():
    return {"message": "Hello World"}

    
class SentimentModel(BaseModel):
    comments: List[str]

class RecommendModel(BaseModel):
    index: int

class NextWordModel(BaseModel):
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

    return { 'result': electra}

print(get_next_predictions('I am a good <mask>'))