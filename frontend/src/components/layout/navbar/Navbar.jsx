"use client";

import { MenuSvg, UserOIcon, UserPlusOIcon } from "@/assets/Svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarNav from "./NavbarNav";
import Search from "./Search";
import NotificationButton from "./NotificationButton";
import useUserStore from "@/stores/useUserStore";


const Navbar = () => {

    const user = useUserStore((state) => state.user);
    const loading = useUserStore((state) => state.loading);
console.log(user)

    const pathname = usePathname();
    return (
        <header className={`py-5 ${pathname === "/" && "absolute"} top-0 right-0 z-30 w-full ${pathname == "/register" && "hidden"}`}>
            <div
                className="fixed w-full h-[5px] top-0 right-0 z-20
          3xl:bg-slate-500 2xl:bg-amber-400 xl:bg-stone-600 lg:bg-red-800 md:bg-orange-500 sm:bg-violet-500 bg-teal-400
        "></div>
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <img src="/images/logo-white.png" alt="StreamVibe" className="3xl:w-full lg:w-[165px] w-[150px]" />
                </Link>

                <NavbarNav pathname={pathname} />

                <div className="flex items-center gap-2">
                    <Search />

                    {loading || !user ? <div className="3xl:w-[5rem] w-[4.1rem] h-1" ></div> : !loading && user ?
                        <>
                            <Link href="/profile">
                                <UserOIcon className="3xl:w-[2.4rem] 3xl:h-[2.4rem]" />
                            </Link>
                            <NotificationButton />
                        </> :
                        <button className="focus:outline-none focus:border-none mx-2.5 md:inline hidden">
                            <UserPlusOIcon className="3xl:w-[2.4rem] 3xl:h-[2.4rem]" />
                        </button>
                    }

                    <button
                        className="w-11 h-11 rounded-lg btn-black-10 border border-c-black-15 md:hidden flex justify-center items-center "
                    >
                        <MenuSvg />
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Navbar;