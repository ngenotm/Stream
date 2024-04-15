"use client";

import { BellSvg, MenuSvg, SearchSvg } from "@/assets/Svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathname = usePathname();

    return (
        <header className={`py-5 ${pathname === "/" && "absolute"} top-0 right-0 z-30 w-full`}>
            <div
                className="fixed w-full h-[5px] top-0 right-0
          3xl:bg-slate-500 2xl:bg-amber-400 xl:bg-stone-600 lg:bg-red-800 md:bg-orange-500 sm:bg-violet-500 bg-teal-400
        "></div>
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <img src="/images/logo-white.png" alt="StreamVibe" className="lg:w-[165px] w-[150px]" />
                </Link>

                <nav>

                    <div className="bg-c-black-06 border-2 border-c-black-12 rounded-lg p-2.5 md:block hidden">
                        <ul className="flex items-center text-c-grey-75 xl:text-super-sm text-xs">
                            <li className="lg:px-4 px-3.5 py-2 bg-c-black-10 rounded font-medium"><Link href="/">Home</Link></li>
                            <li className="lg:px-4 px-3.5 py-2"><Link href="/">Movies & Shows</Link></li>
                            <li className="lg:px-4 px-3.5 py-2"><Link href="/support">Support</Link></li>
                            <li className="lg:px-4 px-3.5 py-2"><Link href="/subscriptions">Subscriptions</Link></li>
                        </ul>
                    </div>

                </nav>
                <div>
                    <button className="focus:outline-none focus:border-none mx-2.5 md:inline hidden"><SearchSvg /></button>
                    <button className="focus:outline-none focus:border-none mx-2.5 md:inline hidden"><BellSvg /></button>
                    <button
                        className="w-11 h-11 rounded-lg bg-c-black-10 border border-c-black-15 md:hidden flex justify-center items-center "
                    >
                        <MenuSvg />
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Navbar;