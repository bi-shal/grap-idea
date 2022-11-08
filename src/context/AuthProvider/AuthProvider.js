import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup   } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

//createUserWithEmailAndPassword
const signInEmailAndPassword = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
//logIn
const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

//logOut
const logOut = () => {
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
    });
    return unsubscribe();
},[])


    const info = {
        user,
        signInEmailAndPassword,
        logIn,
        logOut,
        providerLogin
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