import CardBar from '../components/CardBar.tsx'
import { useParams } from 'react-router-dom'

function CardPage() {
    const params = useParams()
    return (
        <main className="w-screen py-6 flex flex-col items-center
                             bg-[linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_60%,transparent_90%)]">
            <CardBar categoryName={params.category} subcategoryName={params.subcategory}></CardBar>
        </main>
    )
}

export default CardPage
