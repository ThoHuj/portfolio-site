import Article from "../components/Article";

const article = {
    "imageurl": "./src/assets/iStock-1483013789.jpg",
    "imagealt": "AI & ML"
}

function ArticleAIML() {
    return (
        <Article imageurl={article.imageurl} imagealt={article.imagealt}>
            <h2>
                AI & ML Engineer
            </h2>
            <p>
                After many years in game devlopment, I got curious about other areas to work in
                as a developer. I therefore studied the AI & ML Engineer programme at
                Teknikhögskolan in Stockholm, Sweden.
            </p>
            <p>
                Since we haven't started learning the subject of AI & ML yet, I don't have much
                to say about it, except that I am looking forward to it very much.
            </p>
            <p>
                Please come back soon and I will tell you all about it!
            </p>
        </Article>
    );
}

export default ArticleAIML