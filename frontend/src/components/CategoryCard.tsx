type CategoryCardProps = {
    title: string;
    imageurl: string;
    body: string;
}

function CategoryCard({ title, imageurl, body }: CategoryCardProps) {
  return (
    <button className="bg-gray-800 rounded-2xl border-b border-black/100 max-w-70 overflow-hidden">
        <img className="max-w-full h-40 border-t border-t-white/30" src={imageurl}></img>
        <h2 className="font-semibold text-left border-t border-t-black/20 text-2xl p-2 bg-gray-900 font-">{title}</h2>
        <p className="text-left p-2 min-h-30 border-t border-t-black/40">{body}</p>
        {/* <div className="p-2 bg-linear-to-t from-black/35 to-transparent">Read More</div> */}
    </button>
  )
}

export default CategoryCard