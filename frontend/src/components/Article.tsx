import type { ReactNode } from "react"

type ArticleProps = {
    imageurl: string;
    imagealt: string;
    children: ReactNode;
};

export default function Article({ imageurl, imagealt, children }: ArticleProps) {
    return (
        <div className="
            max-w-150 mx-6 flex flex-col items-center rounded-2xl
            bg-gray-800
            border-t border-t-white/20
            border-b border-b-black/60
        ">
            <img className="border-b border-white/10 rounded-t-2xl" src={imageurl} alt={imagealt}></img>
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
                ">{children}
            </div>
        </div>
    );
}