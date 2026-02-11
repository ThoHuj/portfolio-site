import "./Navbar.css"
import NavButton from "./NavButton";

export default function NavbarContainer() {
    return (
        <nav className="navbar-container">
            {/* <NavButton text="AI & ML"></NavButton> */}
            <NavButton text="Game Dev"></NavButton>
            {/* <NavButton text="DevOps"></NavButton> */}
            <NavButton text="Python"></NavButton>
            {/* <NavButton text="Photography"></NavButton> */}
            {/* <NavButton text="Art"></NavButton> */}
            {/* <NavButton text="Design"></NavButton> */}
        </nav>
    );
}