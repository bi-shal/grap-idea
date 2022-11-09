import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SeeReview = ({ser,handleDelete}) => {
    const {user} = useContext(AuthContext);
    const {_id,email,customer,message,serviceName,price} = ser;


    //edit
    const handleEdit = (id) => {
        console.log('click Edit button');
    }


    

    

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={user?.photoURL} alt="Shoes" /></figure> */}
            <div className="avatar online mx-auto">
                <div className="w-24 rounded-full">
                <img src={user?.photoURL} alt="Shoes" />
                </div>
                </div>
            <div className="card-body">
                <h2 className="card-title text-2xl">{customer}</h2>
                <h2 className="card-title text-2xl text-red-400">{serviceName}</h2>
                <h2 className="card-title text-2xl">{email}</h2>
                <p className='text-1xl font-semibold'>Review : {message}</p>
                <div className="card-actions justify-end">
                    <Link >
                        <button 
                        onClick={() =>handleEdit(_id)}
                        className="btn btn-primary"
                        >Edit
                        </button>
                    </Link>
                    <Link >
                        <button 
                        onClick={() =>handleDelete(_id)}
                        className="btn btn-primary"
                        >Delete
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SeeReview;