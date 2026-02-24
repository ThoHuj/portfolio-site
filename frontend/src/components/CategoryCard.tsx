import { Link } from "react-router-dom"

type CategoryCardProps = {
    cardData: {
        id: BigInteger,
        type: string,
        title: string,
        url_title: string,
        header_img_url: string,
        summary: string,
    }
}

function CategoryCard(props: CategoryCardProps) {
    const cardData = props.cardData
    let targetUrl = ""
    if (cardData.type == "article") { targetUrl = `/articles/${cardData.id}` }
    else { targetUrl = `${cardData.url_title}` }

    return (
        <Link to={targetUrl} className="
      group relative flex flex-col
      max-w-[18rem] overflow-hidden rounded-2xl cursor-pointer
      bg-gray-800 transition-all duration-300
      border-t border-t-white/20 hover:border-t-white/40
      border-b hover:border-b-2 border-b-black/60 hover:border-b-black
    ">
            <div className="
        absolute inset-0 z-10 pointer-events-none 
        bg-linear-to-b from-white/4 to-black/5 
        opacity-0 transition-opacity duration-100 group-hover:opacity-100
      " />
            <img
                src={cardData.header_img_url}
                alt={cardData.title}
                className="h-40 w-full object-cover border-b border-white/10"
            />
            <div className="relative z-20">
                <h2 className="p-3 text-2xl font-semibold">
                    {cardData.title}
                </h2>
                <p className="min-h-32 border-t border-white/10 p-3">
                    {cardData.summary}
                </p>
            </div>
        </Link>
    )
}

export default CategoryCard