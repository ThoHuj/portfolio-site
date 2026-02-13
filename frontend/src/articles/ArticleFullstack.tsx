import Article from "../components/Article";

const article = {
    "imageurl": "https://www.techspot.com/images2/news/bigimage/2024/03/2024-03-07-image-12.jpg",
    "imagealt": "Linux"
}

function ArticleRoR() {
    return (
        <Article imageurl={article.imageurl} imagealt={article.imagealt}>
            <h2>
                Fullstack Developer
            </h2>
            <p>
                After many years in game devlopment, I got curious about other areas to work in
                as a developer. I therefore studied the AI & ML Engineer programme at
                Teknikhögskolan in Stockholm, Sweden.
            </p>
            <p>
                I learned how to code backend and APIs in Python, how to model and create
                SQL databases, how to configure cloud Linux servers and how to deploy
                applications running on them. I also learned how to present the applications
                in frontend, like this portfolio website I made with React + Vite.
            </p>
            <p>Checkout my GitHub in the link below!</p>
        </Article>
    );
}

export default ArticleRoR