import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";

const Layout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-[76px]"><Outlet></Outlet></div>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Layout;