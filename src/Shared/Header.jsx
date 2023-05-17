import React, { useContext } from 'react';
import logo from './../../public/images.jfif';
import { Link } from 'react-router-dom';
import { contextProvider } from '../AuthProvider';

const Header = () => {
    const { user, userLogout } = useContext(contextProvider);

    const logout = () => {
        userLogout()
            .then()
            .catch(er => console.log(er.message))
    }
    return (
        <div className='flex justify-between mx-10 mb-3'>
            <div className='flex'>
                <img src={logo} alt="" className='h-14 w-14' />
                <h2 className='text-4xl text-green-800 font-bold mt-2 ms-2'>Care Sphare</h2>
            </div>
            <nav className='md:flex'>

                <ul className='md:flex md:justify-around space-x-6 mx-36 mt-8'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/donation'>Donation</Link></li>
                    
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li>
                        {
                            user && <Link to='/volunteerLists'>Events</Link>
                        }
                    </li>
                </ul>
                {
                    user ? <button onClick={logout} className='bg-red-500 px-3 py-1 mx-4 text-black'>Logout</button> :
                    <button className='bg-green-100 px-3 py-1 mx-4'><Link to='/login'>Login</Link></button>
                }
                
                <button className='bg-black text-white px-3 py-1'>Admin</button>
            </nav>
        </div>
    );
};

export default Header;