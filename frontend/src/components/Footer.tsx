import NavButton from "./NavButton"

function Footer() {
  return (
    <div className="space-x-4 pt-6 min-w-[80vw] border-t border-white/30 flex justify-center items-center gap-2">
        <NavButton text="LinkedIn" url="https://www.linkedin.com/in/thohuj/"/>
        <NavButton text="Instagram" url="https://www.instagram.com/thomomom/"/>
    </div>
  )
}

export default Footer