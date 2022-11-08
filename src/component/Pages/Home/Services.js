import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

const [services,setServices] = useState([])
// console.log(services)

useEffect(() => {
    fetch(`http://localhost:5000/servicess`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setServices(data)
    })
},[])

    return (
    <div>
        <div>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
        <div className='flex justify-center m-10'>
        <Link to={'/allService'}><button
        className="btn btn-secondary px-10">
        All Services
            </button></Link>
        </div>

    </div>
    );
};

export default Services;