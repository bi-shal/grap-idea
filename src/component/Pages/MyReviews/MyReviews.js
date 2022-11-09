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


//delete
const handleDelete = (id) => {
    console.log("clcik Delete button",id)
    const proceed = window.confirm('Are you sure , you want to delete this item...')
        if(proceed){
            fetch(`http://localhost:5000/revieww/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('delete Successfully');
                    const remaining = services.filter(ser => ser._id !== id)
                    setServices(remaining)
                }
            })
        }
}

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
                handleDelete={handleDelete}
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