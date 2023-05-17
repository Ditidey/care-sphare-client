import React, { useContext } from 'react';
import logo from '../../public/images.jfif';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
import { contextProvider } from '../AuthProvider';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const event = useLoaderData();
    const {_id, title, photo, date, description} = event;
    const {user} = useContext(contextProvider);

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/registerLists', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Successful!',
                        text: 'You event is added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='p-10 w-full mx-auto'>
            <div className='ms-56'>
                <img src={logo} alt="" className='h-14 w-16' />
                <p className='text-3xl text-green-800 font-bold'>Care Sphare</p>
                <p className='text-2xl font-semibold my-5 text-center'>Register as a volunteer in Care Sphare</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='bg-green-50 p-10  mt-10 w-1/2 rounded-lg ms-96'>
                <label htmlFor="" className='ms-0'>Full Name</label>
                <input defaultValue="name" {...register("name", { required: true })} className='bg-green-50 border-b-4 w-full p-2 rounded-sm mb-5' />
                <label htmlFor="" className='ms-0'>Email</label>
                <input type='email' value={user.email} {...register("email", { required: true })} className=' w-full p-2 rounded-sm mb-5 bg-green-50 border-b-4' />
                <label htmlFor="">Date</label>
                <input type='date' value={date} {...register("date", { required: true })} className='bg-green-50 border-b-4 w-full p-2 rounded-sm mb-5' />
                <label htmlFor="">Description</label>
                <input defaultValue="say about you and your expectations" {...register("description", { required: true })} className='bg-green-50 border-b-4 w-full p-2 rounded-sm mb-5' />
                <label htmlFor="">Event Title</label>
                <input  value={title} {...register("title", { required: true })} className='bg-green-50 border-b-4   w-full p-2 rounded-sm mb-5' />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className='border bg-green-900 text-white font-bold ms-24 w-1/2 p-2 rounded-sm mt-8' />
            </form>
        </div>
    );
};

export default Register;