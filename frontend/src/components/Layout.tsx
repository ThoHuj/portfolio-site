import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="flex flex-col items-center text-gray-200 font-normal">
            <Header />
            <Outlet />
            <Footer />
        </div>

    )
}
