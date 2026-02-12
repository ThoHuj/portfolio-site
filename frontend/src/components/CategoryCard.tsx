type CategoryCardProps = {
    title: string;
    imageurl: string;
    body: string;
}

function CategoryCard({ title, imageurl, body }: CategoryCardProps) {
  return (
    <button className="cursor-pointer bg-blue-300 rounded-2xl border max-w-90">
        <h2 className="text-2xl p-2">{title}</h2>
        <img className="max-w-full max-h-40" src={imageurl}></img>
        <p className="text-left p-2 min-h-30">{body}</p>
        <div className="bg-amber-950 p-2 rounded-b-2xl">Read More</div>
    </button>
  )
}

export default CategoryCard