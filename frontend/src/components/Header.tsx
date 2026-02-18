import { Link } from "react-router-dom"

const titletexts: string[] = [
    "a revolutionary device",
    "this changes everything",
    "it just works",
    "incredibly fast"
]

const randomSubheading = titletexts[Math.floor(Math.random() * titletexts.length)];

export default function Header() {
    return (
        <Link to="/" className="cursor-pointer">
            <header className="min-w-[80vw] flex flex-col items-center">
                <h1 className="p-2 text-center text-5xl font-semibold">Thom Hujanen</h1>
                <h2 className="pb-2 w-full border-b border-white/30 text-nowrap text-center" >~ {randomSubheading} ~</h2>
            </header>
        </Link>

    )
}
