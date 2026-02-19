from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

card_data = [{
            "title": "Fullstack",
            "summary": "Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications.",
            "imageSrc": "https://i.redd.it/a1ebq74mcl181.png",
            "targetUrl": "/fullstack",
            },
            {
            "title": "AI & ML",
            "summary": "Studying implementaton and deployment of artificial intelligence & machine learning systems.",
            "imageSrc": "https://cdn.i-scmp.com/sites/default/files/styles/700x400/public/d8/images/canvas/2025/07/10/0355f1da-90cd-40ec-a5a9-b96670a2aa8b_d08379d6.jpg?itok=9RzHlip3&v=1752155786",
            "targetUrl": "/AiMl",
            },
            {
            "title": "Game Dev",
            "summary": "Bachelor's degree in Game Design with over 5 years working in the industry.",
            "imageSrc": "https://a.storyblok.com/f/158607/1920x1080/4ddf5af627/egs_goatsimulator3_theshadiestupdate_banner1920x1080-notext.jpg/m/fit-in/600x600",
            "targetUrl": "/GameDev",
            },
            ]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/cards")
def list_cards(category_id: int | None = None):
    return card_data