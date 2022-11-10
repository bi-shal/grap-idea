import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup, updateProfile   } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setloading] = useState(true);

//createUserWithEmailAndPassword
const signInEmailAndPassword = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    // setLoader(true)
}
//logIn
const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setloading(true);
}


//logOut
const logOut = () => {
    localStorage.removeItem('service-token')
    return signOut(auth)
}

//googleSignUp
const providerLogin =(provider) => {
    return signInWithPopup(auth, provider)

}

//observerb
useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setloading(false)
    });
    return () => {
        return unsubscribe();
    }
},[])

//Update a user's profile------------------
const updateKoroTomarProfile = (profile) => {
    return updateProfile(auth.currentUser,profile)
}


    const info = {
        user,
        signInEmailAndPassword,
        logIn,
        logOut,
        providerLogin,
        loader,
        setUser,
        updateKoroTomarProfile
    }

    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;