import CardBar from '../components/CardBar.tsx'
import { useState } from 'react'
import ArticleRoR from '../articles/ArticleRoR.tsx';
import ArticleFullstack from '../articles/ArticleFullstack.tsx'
import ArticleAIML from '../articles/ArticleAIML.tsx'

function HomePage() {
    const [mainContent, setMainContent] = useState("CardBar");

    return (
        <main className="w-screen py-6 flex flex-col items-center
                             bg-[linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_60%,transparent_90%)]">
            {mainContent === "CardBar" && <CardBar onNavigate={setMainContent} />}
            {mainContent === "ArticleRoR" && <ArticleRoR />}
            {mainContent === "ArticleFullstack" && <ArticleFullstack />}
            {mainContent === "ArticleAIML" && <ArticleAIML />}
        </main>
    )
}

export default HomePage
