import React from 'react';
import Sidebar from './Sidebar';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
 
const CreateCares = () => {
    
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data =>
{
    console.log(data)
    fetch('http://localhost:5000/addEvent',{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
        console.log(result)
        if(result.insertedId){
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
        <div className='grid grid-cols-12 mx-6 bg-green-50 '>
            <div className=' col-span-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-8  w-full  '>
                 <p className='text-2xl font-bold mb-10  pt-10 w-full bg-white p-10'>Add Event</p>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-green-50 p-10  mt-10 w-1/2 rounded-lg ms-40'>
                     <label htmlFor="" className='ms-0'>Event title</label>
                    <input defaultValue="test" {...register("title", { required: true })} className='border w-full p-2 rounded-sm mb-5'/>
                     <label htmlFor="" className='ms-0'> Photo</label>
                    <input defaultValue="test" {...register("photo", { required: true })} className='border w-full p-2 rounded-sm mb-5'/>

                    <label htmlFor="">Event Date</label>
                    <input type='date' defaultValue="test" {...register("date", { required: true })} className='border w-full p-2 rounded-sm mb-5'/> 
                    <label htmlFor="">Description</label>                   
                    <input {...register("description", { required: true })} className='border w-full h-24 p-2 rounded-sm mb-5'/>
                     
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className='border bg-green-900 text-white font-bold ms-24 w-1/2 p-2 rounded-sm mb-5'/>
                </form>
            </div>
        </div>
    );
};

export default CreateCares;