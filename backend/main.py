from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message":"Det här är min portfolio!"}