import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HomeNavbar = () => {
  const [showHomeNav, toggleShowHomeNav] = useState(true);
  const showNav = (prev:boolean) => {
    toggleShowHomeNav(!prev);
  }

  return (
    <>  
      <div className={clsx("fixed", showHomeNav && "-translate-y-full" ,"duration-300 transition-all flex flex-col h-dvh w-dvw bg-slate-700 z-[5] p-8 gap-5")}>
        <div className="flex justify-end">
          <button className="p-4" onClick={() => showNav(showHomeNav)}>
            <XMarkIcon className="w-6 h-6 fill-white" />
          </button>
        </div>
        <ul className="flex flex-col lg:hidden gap-6 p-2 items-center">
          <Link className="hover:font-semibold transition-all duration-100 ease-in-out" to={"/beta"}>Home</Link>
          <Link className="hover:font-semibold transition-all duration-100 ease-in-out" to={"/about"}>About</Link>
          <Link className="hover:font-semibold transition-all duration-100 ease-in-out" to={"/contacts"}>Contact</Link>
          <Link className="hover:font-semibold transition-all duration-100 ease-in-out" to={"/login"}>Login</Link>
        </ul>
      </div>
      <div className="p-8 lg:py-10 lg:px-16 font-display">
        <nav className="relative flex justify-end items-center">
          <img src="woc-dark.png" className="w-14 lg:w-28 absolute left-0 " alt="logo" />
          <button className="p-4" onClick={() => showNav(showHomeNav)}>
            <Bars3Icon className="w-6 h-6 lg:hidden" />
          </button>
          <ul className="hidden lg:flex lg:justify-end gap-4 p-2 items-center">
            <Link className="hover:font-semibold transition-all duration-100 ease-in-out text-center px-4 w-24" to={"/beta"}>Home</Link>
            <Link className="hover:font-semibold transition-all duration-100 ease-in-out text-center px-4 w-24" to={"/about"}>About</Link>
            <Link className="hover:font-semibold transition-all duration-100 ease-in-out text-center px-4 w-24" to={"/contacts"}>Contact</Link>
            <Link className="hover:font-semibold transition-all duration-100 ease-in-out text-center px-4" to={"/login"}>
              <div className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full">Login</div>
            </Link>
          </ul>
        </nav>
      </div>
      
    </>
  )
}