import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
    const {user} = useContext(AuthContext);

const [services,setServices] = useState([])
// console.log(services)


useEffect(() => {
    fetch(`https://assignment-11-server-site-beryl.vercel.app/servicess`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setServices(data)
    })
},[user?.email])

    return (
    <div>
        <div>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Best Service For You!!!</h2>
                <p>I will make sure,Better service for you . Minimalstic PhotoShoot take oFfer </p>
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