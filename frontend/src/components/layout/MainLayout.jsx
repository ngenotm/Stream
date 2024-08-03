"use client"

import useUserStore from "@/stores/useUserStore";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const MainLayout = ({ children }) => {
    const fetchUser = useUserStore((state) => state.fetchUser);

    fetchUser();

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;