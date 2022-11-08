import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCard = ({service}) => {
    const { _id, img, price, title,description } = service;


    const hadelCheck=(id) => {
        console.log('click');
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                {/* <p className=' font-semibold'> Description : {description}</p> */}
                {description.length > 100 ?
                        <p className=' font-semibold'> Description : {description.slice(0,100) + '...'}</p>
                        :
                        <p>{description}</p>
                    }
                <div className="card-actions justify-end">
                    <Link to={`/servicess/${_id}`}>
                        <button 
                        onClick={() => hadelCheck(_id)}
                        className="btn btn-primary w-40"
                        >Detail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllServiceCard;