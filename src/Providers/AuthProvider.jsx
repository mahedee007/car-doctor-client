import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp =  (name, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,name, email, password) 
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOff = ()=>{
        return signOut(auth);
    }
    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return()=>{
            return unsubscribe();
        }
    },[])

   const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        signOff,
        signInWithGoogle 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;