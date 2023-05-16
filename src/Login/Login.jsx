import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { contextProvider } from '../AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../public/images.jfif';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {userLogin} = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)
        userLogin(data.email, data.password)
        .then(result =>{
            console.log(result)
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error.message)
        })
    };

    return (
        <div className='p-10 w-full'>
            <div className='ms-36'>
                <img src={logo} alt="" className='h-14 w-16' />
                <p className='text-3xl text-green-800 font-bold'>Care Sphare</p>
                <p className='text-3xl font-semibold my-5 text-center'>Please Login</p>
            </div>
            <div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='bg-green-50 p-10 py-20 mt-10 w-1/2 rounded-lg ms-96'>
               
                <label>Email</label>
                <input type='email' defaultValue="email@gmail.com" {...register("email", { required: true })} className='border  w-full p-2 rounded-sm mb-5' />
                 <label>Password</label>
                <input type='password' {...register("password", { required: true })} className='border  w-full p-2 rounded-sm mb-5'/>
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Login" className='border bg-green-600 mt-10 text-white font-bold w-full p-2 rounded-sm mb-5'/>
            </form>
            <Link to='/signup' className='ms-96 mt-5 text-xl text-blue-600'>New to care sphare? Create account</Link>
            </div>
        </div>
    );
};

export default Login;