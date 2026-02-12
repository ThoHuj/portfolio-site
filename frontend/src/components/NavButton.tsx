
type NavButtonProps = {
    text: string;
}

export default function NavButton({ text }: NavButtonProps) {
    return (
        <button className="p-2 rounded-2xl border-b cursor-pointer hover:bg-amber-800">
            {text}
        </button>
    );
}