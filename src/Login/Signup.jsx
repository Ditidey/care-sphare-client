import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { contextProvider } from '../AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/images.jfif'
const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {userRegister} = useContext(contextProvider);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        userRegister(data.email, data.password)
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message)
        })
    };
    return (
        <div className='p-10 w-full' >
        <div className='ms-44'>
            <img src={logo} alt="" className='h-14 w-16' />
            <p className='text-3xl text-green-800 font-bold'>Care Sphare</p>
            <p className='text-2xl font-semibold my-5 text-center'>Create Account in Care Sphare</p>
        </div>
        <div>
        
        <form onSubmit={handleSubmit(onSubmit)} className='bg-green-50 p-10 py-8  mt-10 w-1/2 rounded-lg ms-96'>
            <label>Name</label>
            <input type='text' defaultValue="name" {...register("name", { required: true })} className='border  w-full p-2 rounded-sm mb-5' />
        
            <label>Email</label>
            <input type='email' defaultValue="email@gmail.com" {...register("email", { required: true })} className='border  w-full p-2 rounded-sm mb-5'/>
             <label>Password</label>
            <input type='password' {...register("password", { required: true })} className='border  w-full p-2 rounded-sm mb-5' />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" value="Sign Up" className='mt-10 border bg-green-700 font-bold text-white w-full p-2 rounded-sm mb-5'/>
        </form>
        <Link to='/login' className='ms-96 mt-5 text-xl text-blue-600'>Already created? Login</Link>
        </div>
    </div>
    );
};

export default Signup;