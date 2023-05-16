import React from 'react';
import Header from '../Shared/Header';
import logo from '../../public/images.jfif'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='px-10 pt-3 bg-gradient-to-r from-slate-200 to-slate-500 opacity-80'>
            <div>
                <Header></Header>
                <h2 className='my-8 text-center text-4xl font-bold pt-10 text-black'>We are <span className='  font-bold'>Sphare</span> here to care you </h2>
                <div className='text-center mb-10 p-10'>
                    <input type="text" className='bg-slate-400 p-2 ' />
                    <button className='bg-gray-500 text-white p-2'>Search</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;