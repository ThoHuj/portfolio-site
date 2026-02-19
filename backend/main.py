from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
@app.get("/")
def root():
    return {"message":"This text is fetched from the API."}
"""

@app.get("/carddata/")
def list_card_data():
    return [{"title": "a card's title",
            "summary": "A card's summary",
            "imageSrc": "https://veganfeministnetwork.com/wp-content/uploads/2015/10/multiple-women-laughing-with-salad.jpg",
            "imageAlt": "A cards header image alt text",
            },
            {"title": "a second card's title",
            "summary": "A second card's summary",
            "imageSrc": "https://veganfeministnetwork.com/wp-content/uploads/2015/10/multiple-women-laughing-with-salad.jpg",
            "imageAlt": "A second cards header image alt text",
            },
            ]