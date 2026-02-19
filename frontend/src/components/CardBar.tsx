import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'

export default function CardBar() {
  const [cards, setCards] = useState([]);

  async function fetchCardData(parentCategoryName: string) {
    const endpoint = "http://localhost:8000/cards" + parentCategoryName
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
      {cards.map((card) => <CategoryCard
        targetUrl={card.targetUrl}
        title={card.title}
        imageUrl={card.imageSrc}
        body={card.summary} />)
      }
    </div>

  )
}
