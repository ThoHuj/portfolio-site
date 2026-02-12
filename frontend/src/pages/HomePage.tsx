import CardBar from '../components/CardBar.tsx'

function HomePage() {
    return (
        <div className="p-1 flex flex-col items-center text-amber-50">
            <header className="header-container flex flex-col items-center">
                <h1 className="p-2 text-center text-5xl">Thom Hujanen</h1>
                <h2 className="pb-2 w-[80vw] border-b border-white/30 text-white/80 text-nowrap text-center" >~ a portfolio ~</h2>
            </header>
            <main className="flex flex-col items-center">
                <CardBar />
            </main>
        </div >
    )
}


export default HomePage
