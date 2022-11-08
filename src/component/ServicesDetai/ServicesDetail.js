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
            {/* review */}

        <h1 className='text-6xl my-10 text-center'>Review...</h1>

            <section className="p-10 dark:bg-gray-800 dark:text-gray-50 my-6 ">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>

        </div>
    );
};

export default ServicesDetail;