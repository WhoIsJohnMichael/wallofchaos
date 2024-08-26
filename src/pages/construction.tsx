import { Link } from "react-router-dom"

export function Construction() {
    return (
        <div className="h-dvh bg-[#292929]">
            <div className="flex h-full justify-center items-center flex-col gap-4">
                <img className="w-80" src="woc-dark-2.png" alt="logo" />
                <h1 className="text-sm font-display text-slate-50">Site Under Construction...</h1>
                <div className="divide">
                    <Link to={"/beta"}>
                        <div className="bg-blue-600 py-2 px-6 rounded-xl">
                            Visit Beta
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}