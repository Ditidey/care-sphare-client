import React from 'react';
import logo from '../../public/images.jfif'
import { Link } from 'react-router-dom';
import { FaList, FaPersonBooth } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className='bg-white py-5 ps-10 h-full'>
            <div className='mb-10 mt-4'>
                <img src={logo} alt="" className='w-18 h-14 '/>
                <p className='text-3xl text-green-700 font-bold'>Care Sphare</p>
            </div>
           <Link to='/eventLists' className='text-blue-500 flex mt-24'>
            <FaList className='mt-1 me-1'></FaList>
            Register List</Link> <br />
           <Link to='/createCares' className='flex font-semibold mt-6'> 
           <FaPersonBooth className='h-4 mt-1 me-1'></FaPersonBooth> 
           Add Event</Link>
        </div>
    );
};

export default Sidebar;