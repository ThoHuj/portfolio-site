import "./NavButton.css"

type NavButtonProps = {
    text: string;
}

export default function NavButton({ text }: NavButtonProps) {
    return (
        <button className="nav-button">
            {text}
        </button>
    );
}