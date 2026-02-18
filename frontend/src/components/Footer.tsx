import NavButton from "./NavButton"

function Footer() {
  return (
    <div className="pt-6 min-w-[80vw] border-t border-white/30 flex justify-center items-center gap-4 flex-wrap ">
      <NavButton text="GitHub" url="https://github.com/ThoHuj/" />
      <NavButton text="LinkedIn" url="https://www.linkedin.com/in/thohuj/" />
      <NavButton text="Instagram" url="https://www.instagram.com/thomomom/" />
    </div>
  )
}

export default Footer