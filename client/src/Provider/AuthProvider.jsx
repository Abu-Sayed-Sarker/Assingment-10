import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    
    const [user, setuser] = useState(null);
    const [loder, setLoder] = useState(true);

    

    // objarver using 
    useEffect(() => {
        const chachData = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoder(false)
        });
        return () => {
            chachData();
        }
    }, [])

    


    // create profile using register 

    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // update profile

    const upDaterofile = upDate => {
        console.log(upDate)
        return updateProfile(auth.currentUser , upDate)
    }


    // log out

    const LogOut = () => {
        setLoder(true)
        return signOut(auth)
    }


    // Log in acount

    const LogIn = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //google log in

    const GoogleLogin = provider => {
        setLoder(true)
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        setuser,
        loder,
        setLoder,
        createUser,
        upDaterofile,
        LogOut,
        LogIn,
        GoogleLogin,

        
    }
    
    
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;