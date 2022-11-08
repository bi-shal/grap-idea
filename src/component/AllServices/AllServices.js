import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {
    const [services,setServices] = useState([])
// console.log(services)------

useEffect(() => {
    fetch(`http://localhost:5000/servicessAll`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setServices(data)
    })
},[])
    return (
        <div className=''>
            <div>
        <div className='mt-10'>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.map(service => <AllServiceCard
                        key={service._id}
                        service={service}
                    ></AllServiceCard>)
                }
            </div>
        </div>
        <div className='flex justify-center m-10'>
        <Link to={'/allService'}><button
        className="btn btn-secondary px-10 w-60">
            Button
            </button></Link>
        </div>

    </div>
        </div>
    );
};

export default AllServices;