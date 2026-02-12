import CardBar from '../components/CardBar.tsx'
import Footer from '../components/Footer.tsx'

function HomePage() {
    return (
        <div className="p-1 flex flex-col items-center text-gray-200">
            <header className="min-w-[80vw] flex flex-col items-center">
                <h1 className="p-2 text-center text-5xl">Thom Hujanen</h1>
                <h2 className="pb-2 w-full border-b border-white/30 text-nowrap text-center" >~ a portfolio ~</h2>
            </header>
            <main className="w-screen py-6 flex flex-col items-center
            bg-[linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_60%,transparent_90%)]
            ">
                <CardBar />
            </main>
            <footer className="">
                <Footer />
            </footer>
        </div >
    )
}


export default HomePage
