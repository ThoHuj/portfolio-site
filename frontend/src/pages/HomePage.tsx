import React from 'react'
import HeaderContainer from "../components/Header.tsx"
import ContentArea from "../components/ContentArea.tsx"
import Article from "../components/Article.tsx"
import NavbarContainer from "../components/Navbar.tsx"
import GameDevPost from "../assets/GameDevPost.mdx"
import NavButton from '../components/NavButton.tsx'

const article = <GameDevPost />

function HomePage() {
    return (
        <>
            <div>
                <header className="header-container">
                    <h1 className="header-text">Thom Hujanen</h1>
                    <nav className="navbar-container">
                        <NavButton text="Game Dev"></NavButton>
                        <NavButton text="Python"></NavButton>
                    </nav>
                </header>
                <main className="content-area">
                    <Article
                        imageurl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/695050/capsule_616x353.jpg?t=1572876316"
                        imagealt="Promo image of the videogame 'Rain of Reflections: Set free'"
                        children={article}>
                    </Article>
                </main>


            </div >
        </>
    )
}


export default HomePage
