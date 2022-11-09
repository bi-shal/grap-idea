import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SeeReview from './SeeReview';

const MyReviews = () => {

    const {user} = useContext(AuthContext);
    // console.log(user);

const [services,setServices] = useState([])
// console.log(services)


useEffect(() => {
    fetch(`http://localhost:5000/reviewsss?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setServices(data)
    })
},[user?.email])

    return (
        <div className='m-4'>
            <h1> MY reviews</h1>

            {
                services.length > 0 ?
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(ser => <SeeReview
                key={ser._id}
                ser={ser}
                ></SeeReview>)
            }
            </div>
            :
            <h1>No Service Added ...</h1>
            }

            {/* <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(ser => <SeeReview
                key={ser._id}
                ser={ser}
                ></SeeReview>)
            }
            </div> */}
            
        </div>
    );
};

export default MyReviews;