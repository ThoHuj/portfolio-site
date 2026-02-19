import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'

export default function CardBar() {
  const [cards, setCards] = useState([]);

  async function fetchCardData(parentCategoryName: string) {
    const endpoint = "http://localhost:8000/carddata/" + parentCategoryName
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCardData("");
  }, []);

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <CategoryCard
        targetUrl="/fullstack"
        title="Fullstack"
        imageUrl="https://i.redd.it/a1ebq74mcl181.png"
        body="Educated in fullstack & DevOps development. Skilled in designing systems, databases, APIs & deployment of web applications." />
      <CategoryCard
        targetUrl="/AiMl"
        title="AI & ML"
        imageUrl="https://cdn.i-scmp.com/sites/default/files/styles/700x400/public/d8/images/canvas/2025/07/10/0355f1da-90cd-40ec-a5a9-b96670a2aa8b_d08379d6.jpg?itok=9RzHlip3&v=1752155786"
        body="Studying implementaton and deployment of artificial intelligence & machine learning systems." />
      <CategoryCard
        targetUrl="/GameDev"
        title="Game Dev"
        imageUrl="https://a.storyblok.com/f/158607/1920x1080/4ddf5af627/egs_goatsimulator3_theshadiestupdate_banner1920x1080-notext.jpg/m/fit-in/600x600"
        body="Bachelor's degree in Game Design with over 5 years working in the industry." />
      {cards.map((card) => <CategoryCard
        targetUrl="/GameDev"
        title={card.title}
        imageUrl={card.imageSrc}
        body={card.summary} />)
      }
    </div>

  )
}
