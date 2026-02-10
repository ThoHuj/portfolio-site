import type { ReactNode } from "react"
import "./Article.css"

type ArticleProps = {
    imageurl: string;
    imagealt: string;
    children: ReactNode;
};

export default function Article({ imageurl, imagealt, children }: ArticleProps) {
    return (
        <div className="article-container">
            <img className="article-image" src={imageurl} alt={imagealt}></img>
            <div className="article-body">{children}</div>
        </div>
    );
}