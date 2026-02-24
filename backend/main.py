from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Any


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:8000/undefined",
    "http://127.0.0.1:8000/undefined",
]

category_data: list[dict[str, Any]] = [
    {
    "id": 1,
    "type": "category",
    "url_title": "fullstack",
    "parent_category_id": 0,
    "title": "Fullstack",
    "summary": "Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications.",
    "header_img_url": "https://i.redd.it/a1ebq74mcl181.png",
    },
    {
    "id": 2,
    "type": "category",
    "url_title": "ai-ml",
    "parent_category_id": 0,
    "title": "AI & ML",
    "summary": "Studying implementaton and deployment of artificial intelligence & machine learning systems.",
    "header_img_url": "https://cdn.i-scmp.com/sites/default/files/styles/700x400/public/d8/images/canvas/2025/07/10/0355f1da-90cd-40ec-a5a9-b96670a2aa8b_d08379d6.jpg?itok=9RzHlip3&v=1752155786",
    },
    {
    "id": 3,
    "type": "category",
    "url_title": "game-dev",
    "parent_category_id": 0,
    "title": "Game Dev",
    "summary": "Bachelor's degree in Game Design with over 5 years working in the industry.",
    "header_img_url": "https://a.storyblok.com/f/158607/1920x1080/4ddf5af627/egs_goatsimulator3_theshadiestupdate_banner1920x1080-notext.jpg/m/fit-in/600x600",
    },
    {
    "id": 4,
    "type": "category",
    "url_title": "fullstack-projects",
    "parent_category_id": 1,
    "title": "Fullstack Projects",
    "summary": "This is a card that will take the visitor to the page of fullstack projects.",
    "header_img_url": "https://eiposgrados.com/wp-content/uploads/2022/08/programador-fullstack.jpg",
    },
    ]

article_data: list[dict[str, Any]] = [
    {
    "id": 0,
    "type": "article",
    "category_id": 1,
    "title": "Tech Stack",
    "summary": "Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications.",
    "header_img_url": "https://i.redd.it/a1ebq74mcl181.png",
    "contentJson": [{"id": 0,"type": "h2","content": "Fullstack Developer"}, 
                    {"id": 1, "type": "p", "content": "After many years in game development, I got curious about other areas to work in as a developer. I therefore studied the AI & ML Engineer programme at Teknikhögskolan in Stockholm, Sweden."},
                    {"id": 2, "type": "p", "content": "I learned how to code backend and APIs in Python, how to model and create SQL databases, how to configure cloud Linux servers and how to deploy applications running on them. I also learned how to present the applications in frontend, like this portfolio website I made with React + Vite."},
                    {"id": 3, "type": "p", "content": "Checkout my GitHub in the link below!"},
                    ],
    },
    {
    "id": 1,
    "type": "article",
    "category_id": 2,
    "title": "AI & ML Engineer",
    "summary": "Studying implementaton and deployment of artificial intelligence & machine learning systems.",
    "header_img_url": "https://www.actian.com/wp-content/uploads/2024/02/how-to-train-generative-AI-actian-hero.webp",
    "contentJson": [{"id": 0,"type": "h2","content": "AI & ML Engineer"}, 
                    {"id": 1, "type": "p", "content": "After many years in game devlopment, I got curious about other areas to work in as a developer. I therefore studied the AI & ML Engineer programme at Teknikhögskolan in Stockholm, Sweden."},
                    {"id": 2, "type": "p", "content": "Since we haven't started learning the subject of AI & ML yet, I don't have much to say about it, except that I am looking forward to it very much."},
                    {"id": 3, "type": "p", "content": "Please come back soon and I will tell you all about it!"},
                    ],
    },
    {
    "id": 2,
    "type": "article",
    "category_id": 3,
    "title": "Rain of Reflections: Set Free",
    "summary": "Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications.",
    "header_img_url": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/695050/capsule_616x353.jpg?t=1572876316",
    "contentJson": [{"id": 0,"type": "h2","content": "Fullstack Developer"}, 
                    {"id": 1, "type": "p", "content": "At Lionbite Games, I started out with the role of QA Intern, but was quickly asked to move on to the design department as their level designer and later game designer. For 1,5 years as their designer in an agile workflow, I did the following while working closely to the game director:"},
                    {"id": 2, "type": "ul", "items": ["Designed and implemented game play content", "Designed levels", "Designed and implemented mini games within the game", "Programmed AI behavior using behavior trees", "Provided feedback and ideas on storytelling", "Created dialogue trees", "Created animations", "Created and implemented cinematics with cameras, animations and scripted events", "Wrote design documents", "Published product updates to end users", "Tested for, and reported bugs", "Implemented bug fixes"]},
                    ],
    },
    {
    "id": 3,
    "type": "article",
    "category_id": 4,
    "title": "Sample Project",
    "summary": "This is a sample project!",
    "header_img_url": "https://cdn.prod.website-files.com/65032fc858c35fbe3342e4ed/668f5fb050eeb735f8cac4fe_Project%20Management%20and%20HAL%20ERP%20Blog%20images.001.png",
    "contentJson": [{"id": 0,"type": "h2","content": "Sample Project"}, 
                    {"id": 1, "type": "p", "content": "At Lionbite Games, I started out with the role of QA Intern, but was quickly asked to move on to the design department as their level designer and later game designer. For 1,5 years as their designer in an agile workflow, I did the following while working closely to the game director:"},
                    {"id": 2, "type": "ul", "items": ["Designed and implemented game play content", "Designed levels", "Designed and implemented mini games within the game", "Programmed AI behavior using behavior trees", "Provided feedback and ideas on storytelling", "Created dialogue trees", "Created animations", "Created and implemented cinematics with cameras, animations and scripted events", "Wrote design documents", "Published product updates to end users", "Tested for, and reported bugs", "Implemented bug fixes"]},
                    ],
    },
    ]


def get_categories_by_parent_category_id(parent_category_id: int) -> list[dict[str, Any]]:
    return [category for category in category_data if category["parent_category_id"] == parent_category_id]

def get_articles_by_category_id(category_id: int) -> list[dict[str, Any]]:
    return [article for article in article_data if article["category_id"] == category_id]

def get_category_id_by_url_title(url_title: str) -> int | None:
    category_id = None
    for category in category_data:
        if category["url_title"] == url_title:
            category_id = category["id"]
    return category_id

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/articles/{article_id}")
def get_article_by_id(article_id: int):
    return [article for article in article_data if article["id"] == article_id][0]

@app.get("/{category}")
def get_category(category: str):
    categories = []
    articles = []
    if category == "undefined":
        category_id = 0
    else:
        category_id = get_category_id_by_url_title(url_title=category)
    if category_id is not None:
        categories = get_categories_by_parent_category_id(parent_category_id=category_id)
        articles = get_articles_by_category_id(category_id=category_id)
    return categories + articles

@app.get("/{category}/{subcategory}")
def get_categories(category: str, subcategory: str):
    categories = []
    articles = []
    category_id = get_category_id_by_url_title(url_title=subcategory)
    if category_id is not None:
        categories = get_categories_by_parent_category_id(parent_category_id=category_id)
        articles = get_articles_by_category_id(category_id=category_id)
    return categories + articles