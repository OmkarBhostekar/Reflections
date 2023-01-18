
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
from pydantic import BaseModel

app = FastAPI()

clf = pickle.load(open("sentiment.pkl",'rb'))
vectorizer = pickle.load(open("transform.pkl", "rb"))

@app.get("/api/home")
async def Home():
    return {"message": "Hello World"}

    
class SentimentModel(BaseModel):
    comments: List[str]

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
