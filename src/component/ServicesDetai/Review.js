import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = ({view}) => {
    // console.log(view);
    const {user} = useContext(AuthContext)
    const {email,customer,message,_id} = view;
    
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
           
            <div className="avatar online mx-auto">
                <div className="w-24 rounded-full">
                <img src={user?.photoURL} alt="Shoes" />
                </div>
                </div>
            <div className="card-body">
                <h2 className="card-title text-2xl">Name : {customer}</h2>
                <h2 className="card-title text-2xl">Email : {email}</h2>
                <h2 className="card-title text-sm">Id : {_id}</h2>
                <p className='text-2xl font-semibold '>Text : {message}</p>
                <div className="card-actions justify-end ">
                    
                </div> 
            </div>
        </div>
    );
};

export default Review;