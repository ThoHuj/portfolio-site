import type { ReactNode } from "react";
import "./ContentArea.css"

type ContentAreaProps = {
    children: ReactNode;
};

export default function ContentArea({ children }: ContentAreaProps) {
    return (
        <main className="content-area">
            {children}
        </main>
    );
}