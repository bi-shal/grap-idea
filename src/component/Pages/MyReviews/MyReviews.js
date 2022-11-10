import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SeeReview from './SeeReview';

const MyReviews = () => {

    const {user,logOut} = useContext(AuthContext);
    // console.log(user);

const [services,setServices] = useState([])
// console.log(services)


useEffect(() => {
    fetch(`http://localhost:5000/reviewsss?email=${user?.email}`,{
      //secure----
      headers:{
        authorization:`Bearer ${localStorage.getItem('service-token')}`
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        return logOut()
      }
      return res.json();
    })
    .then(data => {
        // setOrders(data)
        setServices(data)
        // console.log('dtaaa',data);
    })
},[user?.email,logOut])



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

//edit
const handleEdit = (id) => {
    console.log('click Edit button');
    fetch(`http://localhost:5000/revieww/${id}`,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status:'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            const remaining = services.filter(ser => ser._id !== id);
            const approving = services.find(ser => ser._id === id)
            approving.status = 'Approvied'

            const newService = [approving,...remaining];
            setServices(newService)
        }

    })
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
                handleEdit={handleEdit}
                ></SeeReview>)
            }
            </div>
            :
            <h1>No Service Added ...</h1>
            }
            
        </div>
    );
};

export default MyReviews;