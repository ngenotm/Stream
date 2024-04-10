import Footer from "./Footer";
import Navbar from "./Navbar";

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