import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>
    {
       // google login
       setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider();
    const githubLogin = () =>   
    {
        // google login
       return signInWithPopup(auth, githubProvider); 
    }

    const createUser = (email , password)=>
    {   
        //create user
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const logout = ()=>
    {
        //logout user
        setLoading(true)
        return signOut(auth)
    }

    const signInUser = (email , password)=>
    {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email , password);
    }

   useEffect(()=>
   {
        const unSubcribe = onAuthStateChanged(auth ,(user)=>{
            if(user)
            {
            console.log('User Logged in');
            setUser(user);
            setLoading(false)
            }
            else
            {
                console.log('User Logged out');
                setUser(null);
                setLoading(false)
            }
        })
        
        return ()=>{
            unSubcribe();
        } 
   },[])
        

    const authentcation = {
        user,
        createUser,
        logout,
        signInUser,
        loading,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={authentcation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;