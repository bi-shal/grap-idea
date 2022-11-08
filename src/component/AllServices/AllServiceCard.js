import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCard = ({service}) => {
    const { id, img, price, title } = service;


    const hadelCheck=() => {
        fetch(``)
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${id}`}>
                        <button 
                        onClick={() =>hadelCheck(id)}
                        className="btn btn-primary"
                        >Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllServiceCard;