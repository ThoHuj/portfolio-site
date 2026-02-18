import { createRoot } from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import FullstackPage from './pages/FullstackPage.tsx'
import AiMlPage from './pages/AiMlPage.tsx'
import GameDevPage from './pages/GameDevPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Fullstack",
        element: <FullstackPage />,
      },
      {
        path: "/AiMl",
        element: <AiMlPage />,
      },
      {
        path: "/GameDev",
        element: <GameDevPage />,
      },],
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
