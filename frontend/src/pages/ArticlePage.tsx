import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type ArticleDataProps = {
    id: number,
    categoryId: number,
    title: string,
    summary: string,
    headerUrl: string,
    contentJson: {
        id: string,
        type: string,
        content: string,
        items: string[]
    }[]
}

export default function ArticlePage() {
    const [articleData, setArticleData] = useState<ArticleDataProps>();
    const { article_id } = useParams();

    useEffect(() => {
        async function fetchArticleData(article_id: string) {

            const endpoint = `http://localhost:8000/articles/${article_id}`
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                console.log(data);
                setArticleData(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (article_id) { fetchArticleData(article_id) };
    }, [article_id]);


    if (!articleData) {
        return;
    }

    return (
        <main className="w-screen py-6 flex flex-col items-center
                             bg-[linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_60%,transparent_90%)]">
            <div className="
            max-w-150 mx-6 flex flex-col items-center rounded-2xl
            bg-gray-800
            border-t border-t-white/20
            border-b border-b-black/60
            ">
                <img className="border-b border-white/10 rounded-t-2xl" src={articleData.headerUrl} alt=""></img>
                <div className="
                p-6
                prose-h2:font-semibold
                prose-h2:text-2xl
                prose-h2:first:mt-0
                prose-h2:mt-4
                prose-h2:pb-2
                prose-h2:border-b 
                prose-h2:border-white/10
                prose-ul:list-disc
                prose-ul:list-inside
                prose-ul:space-y-2
                prose-ul:p-4
                prose-p:mt-4
                ">
                    {articleData.contentJson?.map((block) => {
                        switch (block.type) {
                            case "h2":
                                return <h2>{block.content}</h2>
                            case "p":
                                return <p>{block.content}</p>
                            case "ul":
                                return <ul>{block.items.map((item) => { return <li>{item}</li> })}</ul>
                        }
                    })}
                </div>
            </div>
        </main>
    )
}
