import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = ({view}) => {
    const {user} = useContext(AuthContext)
    const {email,customer,message} = view;
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={user?.photoURL} alt="Shoes" /></figure> */}
            <div className="avatar online mx-auto">
                <div className="w-24 rounded-full">
                <img src={user?.photoURL} alt="Shoes" />
                </div>
                </div>
            <div className="card-body">
                <h2 className="card-title text-2xl">{customer}</h2>
                <h2 className="card-title text-2xl">{email}</h2>
                <p className='text-1xl font-semibold'>{message}</p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/checkout/${_id}`}>
                        <button 
                        // onClick={() =>hadelCheck(_id)}
                        className="btn btn-primary"
                        >Checkout
                        </button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Review;