import React from 'react';
import LogoUp from '../Shared/LogoUp';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <LogoUp></LogoUp>
             <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;