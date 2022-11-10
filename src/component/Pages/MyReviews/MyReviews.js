import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SeeReview from './SeeReview';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyReviews = () => {

    const {user,logOut} = useContext(AuthContext);
    // console.log(user);

const [services,setServices] = useState([])
// console.log(services)


useEffect(() => {
    fetch(`https://assignment-11-server-site-beryl.vercel.app/reviewsss?email=${user?.email}`,{
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
        setServices(data)
    })
},[user?.email,logOut])



//delete
const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure , you want to delete this item...')
        if(proceed){
            fetch(`https://assignment-11-server-site-beryl.vercel.app/revieww/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    // alert('delete Successfully');
                    toast("Delete Successfully");
                    const remaining = services.filter(ser => ser._id !== id)
                    setServices(remaining)
                }
            })
        }
}

//edit
const handleEdit = (id) => {
    
    fetch(`https://assignment-11-server-site-beryl.vercel.app/revieww/${id}`,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status:'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        toast("Edit successFully");
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
            <h1 className='text-5xl m-6 text-center py-4 text-red-300'> MY reviews</h1>

            {
                services.length > 0 ?
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-zinc-800 p-6 py-8'>
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
            <h1 className='text-4xl text-center text-orange-500'>No Service Added ...</h1>
            }
            
        </div>
    );
};

export default MyReviews;
