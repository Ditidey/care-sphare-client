import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cares = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [])
  
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-20 mb-4'>
             
            {
                events.map(event =>  
                    <div key={event._id} className='bg-green-50 '>
                    <div className="card glass ">
                        <figure><img src={event.photo} alt="car!" className='h-1/4' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{event.title}</h2>
                            
                            <div className="card-actions justify-end">
                                <Link to={`/register/${event._id}`}> <button className="btn btn-primary bg-green-600 w-full bottom-0 mt-3 mb-0">Register now!</button> </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Cares;