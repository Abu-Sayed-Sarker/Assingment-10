/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loder from "../Components/Loder";


const PrivetRouter = ({children}) => {
    const { user, loder } = useContext(AuthContext)

    const Location = useLocation()
    

    if (loder) {
        return <Loder></Loder>
    }

    if (user && user.email) {
        return children
    }
    return (
        <Navigate state={Location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivetRouter;