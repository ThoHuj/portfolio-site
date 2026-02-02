import "./Header.css"

type HeaderProps = {
    title: string;
    subtitle: string;
};

export default function HeaderContainer({ title, subtitle }: HeaderProps) {
    return (
        <header className="header-container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    );
}