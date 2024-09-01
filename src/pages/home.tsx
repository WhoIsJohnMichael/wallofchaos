import { Link } from "react-router-dom"
import { Bars3Icon } from "@heroicons/react/16/solid"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { clsx } from "clsx"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { HomeNavbar } from "../components/homenavbar"

export const Home = () => {
  return (
    <>
      <HomeNavbar/>
      <div className="p-8 lg:py-10 lg:px-16 text-slate-50">
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="text-4xl lg:text-8xl text-blue-300 font-bold mt-20">Wall Of Chaos</h1>
          <h2 className="mt-2 text-sm lg:text-3xl font-medium">Chaos? We've got it covered.</h2>
          <button className="text-lg bg-slate-600 px-6 py-3 rounded-full mt-6">
              Register Now
              <ArrowUpRightIcon className="inline-block ml-1 mb-1 size-6"/>
          </button>
        </div>
      </div>
    </>
  )
}