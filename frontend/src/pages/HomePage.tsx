import CardBar from '../components/CardBar.tsx'
import Footer from '../components/Footer.tsx'
import { useState } from 'react'
import ArticleRoR from '../articles/ArticleRoR.tsx';
import ArticleFullstack from '../articles/ArticleFullstack.tsx'



function HomePage() {
    const [mainContent, setMainContent] = useState("CardBar");

    return (
        <div className="p-1 flex flex-col items-center text-gray-200 font-normal">
            <header className="min-w-[80vw] flex flex-col items-center">
                <button onClick={() => setMainContent("CardBar")} className="min-w-[80vw] cursor-pointer">
                    <h1 className="p-2 text-center text-5xl">Thom Hujanen</h1>
                    <h2 className="pb-2 w-full border-b border-white/30 text-nowrap text-center" >~ a revolutionary device ~</h2>
                </button>
            </header>
            <main className="w-screen py-6 flex flex-col items-center
                             bg-[linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_60%,transparent_90%)]">
                {mainContent === "CardBar" && <CardBar onNavigate={setMainContent}/>}
                {mainContent === "Article" && <ArticleRoR />}
                {mainContent === "ArticleFullstack" && <ArticleFullstack />}
            </main>
            <footer className="">
                <Footer />
            </footer>
        </div >
    )
}


export default HomePage
