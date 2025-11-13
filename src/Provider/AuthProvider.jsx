import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const[user, setUser] = useState(null);

const createUser = (email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
};

const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
};

const signInwithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider);
}


const logOut=()=>{
    return signOut(auth);
}


useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (currentUSer)=>{
        setUser(currentUSer);
    });
    return()=>{
         unsubscribe();
    }
},[])



const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    signInwithGoogle,
};
    return  <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;