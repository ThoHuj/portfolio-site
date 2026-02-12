import CategoryCard from './CategoryCard'

export default function CardBar() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
        <CategoryCard
        title="Fullstack" 
        imageurl="https://miro.medium.com/0*XH3rLskyOsCqVV-j.jpg" 
        body="I'm a Fullstack dev, baby!" />
        <CategoryCard 
        title="AI & ML" 
        imageurl="https://miro.medium.com/0*XH3rLskyOsCqVV-j.jpg" 
        body="I'm a Fullstack dev, baby!" />
        <CategoryCard 
        title="Game Dev" 
        imageurl="https://miro.medium.com/0*XH3rLskyOsCqVV-j.jpg" 
        body="I'm a Fullstack dev, baby!" />
    </div>
  )
}
