import { Dispatch, SetStateAction } from "react"

interface NavbarProps {
    page: string,
    setPage: Dispatch<SetStateAction<string>>}

const Navbar = ({page, setPage}: NavbarProps) => {
    return (
    <div className='flex order-3 lg:order-2 h-10 w-full items-center justify-between p-4'>
        <button className={page === "about" ? 'w-1/4 bg-slate-100 text-slate-800 transition-color delay-300': "w-1/4 transition-all bg-slate-900 text-slate-100"} onClick={()=>setPage("about")}>About</button>
        <button className={page === "blog" ? 'w-1/4 bg-slate-100 text-slate-800 transition-color delay-300': "w-1/4 transition-all bg-slate-900 text-slate-100"} onClick={()=>setPage("blog")}>Blog</button>
        <button className={page === "portfolio" ? 'w-1/4 bg-slate-100 text-slate-800 transition-color delay-300': "w-1/4 transition-all bg-slate-900 text-slate-100"} onClick={()=>setPage("portfolio")}>Portfolio</button>
        <button className={page === "contact" ? 'w-1/4 bg-slate-100 text-slate-800 transition-color delay-300': "w-1/4 transition-all bg-slate-900 text-slate-100"} onClick={()=>setPage("contact")}>Contact</button>
    </div>)
}

export default Navbar