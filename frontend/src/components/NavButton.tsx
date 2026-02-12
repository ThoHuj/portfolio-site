
type NavButtonProps = {
    text: string;
    url: string;
}

export default function NavButton({ text, url }: NavButtonProps) {
    return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-4 py-2 border-t rounded-2xl border-white/20 hover:bg-white/20 cursor-pointer"
    >
      {text}
    </a>
  );
}