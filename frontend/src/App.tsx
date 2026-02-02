import { useEffect, useState } from 'react'
import HeaderContainer from './components/Header.tsx'
import PageContent from "./components/PageContent.tsx"

function App() {
  const [message, setMessage] = useState<string>("Hämtar data...")

  useEffect(() => {
    // Försök hämta data från backend
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message) // Sätter texten från backend (om det lyckas)
      })
      .catch((error) => {
        console.error("Fel vid hämtning:", error)
        setMessage("Kunde inte nå backend!")
      })
  }, [])

  return (
    <> 
      <HeaderContainer title="Thom's Portfolio" subtitle="This is my portfolio!"></HeaderContainer>
      <PageContent content={message}></PageContent>
    </>
  )
}

export default App