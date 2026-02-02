from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message":"This text is fetched from the API."}