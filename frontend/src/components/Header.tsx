import "./Header.css"

type HeaderProps = {
    title: string;
}

export default function HeaderContainer({ title }: HeaderProps) {
    return (
        <header className="header-container">
            <h1>{title}</h1>
        </header>
    );
}