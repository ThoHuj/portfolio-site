
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
      className="
      px-4 py-2
      bg-linear-to-b from-transparent hover:from-white/4 to-black/0 hover:to-black/5 
      transition-all duration-100 
      border-t rounded-2xl border-t-white/20 hover:border-t-white/40 
      border-b border-b-black hover:border-b-black/50 hover:border-b-2 
      cursor-pointer
      "
    >
      {text}
    </a>
  );
}