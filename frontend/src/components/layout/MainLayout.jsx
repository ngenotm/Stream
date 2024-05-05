import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const MainLayout = ({ children }) => {
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