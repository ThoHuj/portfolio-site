import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'

type CardBarProps = {
    categoryName: string | undefined;
    subcategoryName: string | undefined
}

export default function CardBar(props: CardBarProps) {
    const [cards, setCards] = useState<{
        id: BigInteger;
        type: string;
        title: string;
        url_title: string;
        header_img_url: string;
        summary: string;
    }[]>();

    useEffect(() => {
        async function fetchCardData(categoryName: string | undefined, subcategoryName: string | undefined) {
            let endpoint = `http://localhost:8000/${categoryName}`
            if (subcategoryName) { endpoint = `${endpoint}/${subcategoryName}` }
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCardData(props.categoryName, props.subcategoryName);

    }, [props]);

    if (!cards) {
        return;
    }

    return (
        <div className="flex gap-6 flex-wrap justify-center">
            {cards.map((card) =>
                <CategoryCard cardData={card} />)
            }
        </div>

    )
}
