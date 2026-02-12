import NavButton from '../components/NavButton.tsx'
import CardBar from '../components/CardBar.tsx'

function HomePage() {
    return (
        <div className="p-1 flex flex-col items-center text-amber-50">
            <header className="header-container">
                <h1 className="p-2 text-center text-4xl ">Thom Hujanen</h1>
                <h2 className="pb-2 border-b text-nowrap" >Fullstack | AI & ML | Game Developer</h2>
                <nav className="p-2 flex justify-center gap-2">
                    <NavButton text="Game Dev"></NavButton>
                    <NavButton text="Python"></NavButton>
                </nav>
            </header>
            <main className="flex flex-col items-center">
                <CardBar />
            </main>
        </div >
    )
}


export default HomePage
