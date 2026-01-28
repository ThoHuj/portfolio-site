from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"Det här är min portfolio!"}