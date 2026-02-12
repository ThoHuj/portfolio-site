import CardBar from '../components/CardBar.tsx'
import Footer from '../components/Footer.tsx'

function HomePage() {
    return (
        <div className="p-1 gap-8 flex flex-col items-center text-amber-50">
            <header className="w-[80vw] header-container flex flex-col items-center">
                <h1 className="p-2 text-center text-5xl">Thom Hujanen</h1>
                <h2 className="pb-2 w-full border-b border-white/30 text-white/80 text-nowrap text-center" >~ a portfolio ~</h2>
            </header>
            <main className="flex flex-col items-center">
                <CardBar />
            </main>
            <footer className="w-full flex justify-center items-center gap-2">
                <Footer />
            </footer>
        </div >
    )
}


export default HomePage
