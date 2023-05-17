import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../AuthProvider';
import { Link } from 'react-router-dom';

const VolunteerLists = () => {
    const {user} = useContext(contextProvider);
    const [lists, setLists] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/registerLists?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
             setLists(data)
        })
    },[user])

   const handleDelete=(id)=>{
    
        fetch(`http://localhost:5000/registerLists/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
              console.log(data)
              if(data.deletedCount < 0){
                const remaining = lists.filter(li => li._id !== id)
                setLists(remaining)
              }
        })
   
   }
    return (
        <div className='my-5 mx-10 p-10 overflow-x-auto'>
            <p className='text-2xl font-bold text-center'>Events Lists</p>
            <p className='text-3xl text-green-600 text-center my-4'>You have register for {lists.length} events. That's great. You are so kind!!</p>
            <table className="table w-full mt-10">
                 <tbody>
                    {
                        lists.map(list=> <tr key={list._id}>
                           <th>{list.name}</th>
                           <td>{list.email}</td>
                           <td>{list.date}</td>
                           <td>{list.title}</td>
                           <td><button className='bg-green-500 p-1 rounded-md px-6 font-bold text-white'>
                            <Link to={`/update/${list._id}`}>Edit</Link>
                            </button></td>
                           <td><button onClick={()=>handleDelete(list._id)} className='bg-red-600 py-1 px-3 rounded-md font-bold text-white'>Delete</button></td>
                        </tr>)
                    }
                 </tbody>
            </table>
        </div>
    );
};

export default VolunteerLists;