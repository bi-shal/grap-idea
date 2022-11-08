import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetail = () => {
    const detail = useLoaderData();
    const {img,title,description,price,quantity} = detail;

    // console.log(detail)------
    

    return (
        <div>
            
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col mx-auto lg:flex-row">
		{/* <div className="w-full lg:w-1/3"></div> */}
        <figure className='p-8'><img src={img} alt="Shoes" /></figure>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			
			<h2 className="text-3xl font-semibold leading-none">{title}</h2>
            
                <p className='text-2xl text-orange-600 font-semibold mt-5'>Price: ${price}</p>
                <p className='text-1xl text-orange-600 font-semibold mt-2'>Total Picture: {quantity} pices</p>
			<p className="mt-4 mb-8 text-sm">{description}</p>
			<button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900">Get started</button>
		</div>
	</div>
</section>
        </div>
    );
};

export default ServicesDetail;