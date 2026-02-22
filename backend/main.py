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
            "targetUrl": "/articles/0",
            },
            {
            "title": "AI & ML",
            "summary": "Studying implementaton and deployment of artificial intelligence & machine learning systems.",
            "imageSrc": "https://cdn.i-scmp.com/sites/default/files/styles/700x400/public/d8/images/canvas/2025/07/10/0355f1da-90cd-40ec-a5a9-b96670a2aa8b_d08379d6.jpg?itok=9RzHlip3&v=1752155786",
            "targetUrl": "/articles/1",
            },
            {
            "title": "Game Dev",
            "summary": "Bachelor's degree in Game Design with over 5 years working in the industry.",
            "imageSrc": "https://a.storyblok.com/f/158607/1920x1080/4ddf5af627/egs_goatsimulator3_theshadiestupdate_banner1920x1080-notext.jpg/m/fit-in/600x600",
            "targetUrl": "/articles/2",
            },
            ]

article_data = [
    {"id": 0,
     "categoryId": 0,
     "title": "Fullstack Developer",
     "summary": "Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications.",
     "headerUrl": "https://i.redd.it/a1ebq74mcl181.png",
     "contentJson": [{"id": 0,"type": "h2","content": "Fullstack Developer"}, 
                     {"id": 1, "type": "p", "content": "After many years in game development, I got curious about other areas to work in as a developer. I therefore studied the AI & ML Engineer programme at Teknikhögskolan in Stockholm, Sweden."},
                     {"id": 2, "type": "p", "content": "I learned how to code backend and APIs in Python, how to model and create SQL databases, how to configure cloud Linux servers and how to deploy applications running on them. I also learned how to present the applications in frontend, like this portfolio website I made with React + Vite."},
                     {"id": 3, "type": "p", "content": "Checkout my GitHub in the link below!"},
                     ],
    },
    {"id": 1,
     "categoryId": 1,
     "title": "AI & ML Engineer",
     "summary": "Studying implementaton and deployment of artificial intelligence & machine learning systems.",
     "headerUrl": "https://www.actian.com/wp-content/uploads/2024/02/how-to-train-generative-AI-actian-hero.webp",
     "contentJson": [{"id": 0,"type": "h2","content": "AI & ML Engineer"}, 
                     {"id": 1, "type": "p", "content": "After many years in game devlopment, I got curious about other areas to work in as a developer. I therefore studied the AI & ML Engineer programme at Teknikhögskolan in Stockholm, Sweden."},
                     {"id": 2, "type": "p", "content": "Since we haven't started learning the subject of AI & ML yet, I don't have much to say about it, except that I am looking forward to it very much."},
                     {"id": 3, "type": "p", "content": "Please come back soon and I will tell you all about it!"},
                     ],
    },
    {"id": 2,
     "categoryId": 2,
     "title": "Rain of Reflections: Set Free",
     "summary": "Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications.",
     "headerUrl": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/695050/capsule_616x353.jpg?t=1572876316",
     "contentJson": [{"id": 0,"type": "h2","content": "Fullstack Developer"}, 
                     {"id": 1, "type": "p", "content": "At Lionbite Games, I started out with the role of QA Intern, but was quickly asked to move on to the design department as their level designer and later game designer. For 1,5 years as their designer in an agile workflow, I did the following while working closely to the game director:"},
                     {"id": 2, "type": "ul", "items": ["Designed and implemented game play content", "Designed levels", "Designed and implemented mini games within the game", "Programmed AI behavior using behavior trees", "Provided feedback and ideas on storytelling", "Created dialogue trees", "Created animations", "Created and implemented cinematics with cameras, animations and scripted events", "Wrote design documents", "Published product updates to end users", "Tested for, and reported bugs", "Implemented bug fixes"]},
                     ],
    },]

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

@app.get("/articles/{article_id}")
def get_article_by_id(article_id: int):
    return article_data[(article_id)]