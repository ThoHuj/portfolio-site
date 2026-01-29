import { useEffect, useState } from 'react'

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
    <div>
      <h1>Thom Om Thunder Hujanen</h1>
      <p>{message}</p>
    </div>
  )
}

export default App