import CategoryCard from './CategoryCard'

type CardBarProps = {
    onNavigate: (componentName: string) => void;
};

export default function CardBar({ onNavigate }: CardBarProps) {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
        <CategoryCard 
        mainContent="Article"
        onNavigate={onNavigate}
        title="Fullstack" 
        imageurl="https://i.redd.it/a1ebq74mcl181.png" 
        body="Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications." />
        <CategoryCard 
        mainContent="Article"
        onNavigate={onNavigate}
        title="AI & ML" 
        imageurl="https://cdn.i-scmp.com/sites/default/files/styles/700x400/public/d8/images/canvas/2025/07/10/0355f1da-90cd-40ec-a5a9-b96670a2aa8b_d08379d6.jpg?itok=9RzHlip3&v=1752155786" 
        body="Studying implementaton and deployment of artificial intelligence & machine learning systems." />
        <CategoryCard
        mainContent="Article"
        onNavigate={onNavigate}
        title="Game Dev" 
        imageurl="https://a.storyblok.com/f/158607/1920x1080/4ddf5af627/egs_goatsimulator3_theshadiestupdate_banner1920x1080-notext.jpg/m/fit-in/600x600" 
        body="Bachelor's degree in Game Design with over 5 years working in the industry." />
    </div>
  )
}
