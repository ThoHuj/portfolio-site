import type { ReactNode } from "react"

type ArticleProps = {
    imageurl: string;
    imagealt: string;
    children: ReactNode;
};

export default function Article({ imageurl, imagealt, children }: ArticleProps) {
    return (
        <div className="max-w-150 mt-2 flex flex-col items-center">
            <img className="rounded-2xl" src={imageurl} alt={imagealt}></img>
            <div className="p-2 prose-h2:text-2xl prose-h2:py-4 prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2 prose-ul:p-4">{children}</div>
        </div>
    );
}