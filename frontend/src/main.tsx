import { createRoot } from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import ArticlePage from './pages/ArticlePage.tsx'

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
                path: "/articles/:article_id",
                element: <ArticlePage />,
            },
        ],
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
