import type React from "react";
import "./Header.css"

type HeaderProps = {
    title: string;
    children: React.ReactNode
}

export default function HeaderContainer({ title, children }: HeaderProps) {
    return (
        <header className="header-container">
            <h1>{title}</h1>
            {children}
        </header>
    );
}