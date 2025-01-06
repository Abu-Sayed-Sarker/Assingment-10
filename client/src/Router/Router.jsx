import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/Notfound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRouter from "./PrivetRouter";
import Addvisa from "../Pages/Addvisa";
import Allvisa from "../Pages/Allvisa";
import Ditails from "../Pages/Ditails";
import MyaddedApplication from "../Pages/MyaddedApplication";
import MyAddedVisa from "../Pages/MyAddedVisa";
import Contact from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/contactUs",
                element: <Contact></Contact>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/addvisa",
                element: <PrivetRouter><Addvisa></Addvisa></PrivetRouter>
            },
            {
                path: '/allvisa',
                element: <Allvisa></Allvisa>,
                loader: () => fetch("https://visa-navigate-server.vercel.app/visas")
            },
            {
                path: '/deteils/:id',
                element: <Ditails></Ditails>,
                loader: ({ params }) => fetch(`https://visa-navigate-server.vercel.app/visas/id/${params.id}`)
            },
            {
                path: '/visaapplications/:email',
                element: <PrivetRouter><MyaddedApplication></MyaddedApplication></PrivetRouter>,
                loader: ({ params }) => fetch(`https://visa-navigate-server.vercel.app/addedvisa/${params.email}`)
            },
            {
                path: "/addedvisa/:email",
                element: <PrivetRouter><MyAddedVisa></MyAddedVisa></PrivetRouter>,
                loader: ({ params }) => fetch(`https://visa-navigate-server.vercel.app/visas/${params.email}`)
            }
        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default Router;