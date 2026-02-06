/* import { useEffect, useState } from "react" */
import HeaderContainer from "./components/Header.tsx"
import ContentArea from "./components/ContentArea.tsx"
import Article from "./components/Article.tsx"
import NavbarContainer from "./components/Navbar.tsx"
import GameDevPost from "./assets/GameDevPost.mdx"

function App() {
  /*   const [message, setMessage] = useState<string>("Fetching data...")
  
    useEffect(() => {
      fetch("http://localhost:8000/")
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.message)
        })
        .catch((error) => {
          console.error("Fetching data failed:", error)
          setMessage("Failed to fetch data from backend!")
        })
    }, []) */

  return (
    <>
      <HeaderContainer title="Thom Hujanen"></HeaderContainer>
      <NavbarContainer></NavbarContainer>
      <ContentArea>
        <Article
          imageurl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/695050/capsule_616x353.jpg?t=1572876316"
          imagealt="Promo image of the videogame 'Rain of Reflections: Set free'"
          children={<GameDevPost />}>
        </Article>
      </ContentArea>
    </>
  )
}

export default App