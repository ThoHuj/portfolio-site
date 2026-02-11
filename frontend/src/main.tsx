import { createRoot } from 'react-dom/client'
import './global.css'
import HomePage from './pages/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <HomePage />
)
