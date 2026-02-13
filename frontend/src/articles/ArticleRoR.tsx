import Article from "../components/Article";

const article = {
    "imageurl": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/695050/capsule_616x353.jpg?t=1572876316",
    "imagealt": "Rain of Reflections: Set Free"
}

function ArticleRoR() {
    return (
        <Article imageurl={article.imageurl} imagealt={article.imagealt}>
            <h2>
                Rain of Reflections: Set Free
            </h2>
            <p>
                At Lionbite Games, I started out with the role of QA Intern,
                but was quickly asked to move on to the design department as
                their level designer and later game designer.
                For 1,5 years as their designer in an agile workflow,
                I did the following while working closely to the game director:
            </p>
            <ul>
                <li>Designed and implemented game play content</li>
                <li>Designed levels</li>
                <li>Designed and implemented mini games within the game</li>
                <li>Programmed AI behavior using behavior trees</li>
                <li>Provided feedback and ideas on storytelling</li>
                <li>Created dialogue trees</li>
                <li>Created animations</li>
                <li>Created and implemented cinematics with cameras, animations and scripted events</li>
                <li>Wrote design documents</li>
                <li>Published product updates to end users</li>
                <li>Tested for, and reported bugs</li>
                <li>Implemented bug fixes</li>
            </ul>
        </Article>
    );
}

export default ArticleRoR