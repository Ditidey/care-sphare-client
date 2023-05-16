import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(contextProvider);
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default ProtectedRoute;