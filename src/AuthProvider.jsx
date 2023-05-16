import React, { createContext, useEffect, useState } from 'react';
import { app } from './Firebase';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const contextProvider = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    
    const userRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
     user,
     loading,
     userRegister,
     userLogin,
     userLogout
    }
    return (

         <contextProvider.Provider value={authInfo}>
            {children}
         </contextProvider.Provider>
    );
};

export default AuthProvider;