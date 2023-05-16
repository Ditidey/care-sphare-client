import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLay = () => {
    return (
        <div>
             
            <Outlet></Outlet>
        </div>
    );
};

export default MainLay;