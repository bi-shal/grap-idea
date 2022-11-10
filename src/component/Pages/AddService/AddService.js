import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const AddService = () => {

    const detail = useLoaderData();
    
	const [post,setPost] = useState([])
    console.log(post)

	//btn--------------
	const handelPlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const url = form.url.value;
        const price = form.price.value;

        const order = {      
            description:description,
            customer: name,
            url:url,
            message:price,			
        }
        fetch(`https://assignment-11-server-site-beryl.vercel.app/servicessAll`, {
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order Placed successfully')
                toast("Wow so easy!");
                <ToastContainer />
            }
            // console.log(data)
			setPost(data)
        })
        .catch(error => console.error(error))
    }



    return (
        <div>
            <h1 className='text-5xl m-4 text-center'>Add Service</h1>
            <form onSubmit={handelPlaceOrder}  className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm p-4">Name</label>
					<input name='name' id="username" type="text" placeholder="Username" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm p-4">Price</label>
					<input name='price' id="username" type="text" placeholder="price" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm p-4">IMG URL</label>
					<input name='url' id="username" type="text" placeholder="Url" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				
				
				<div className="col-span-full">
					<label  className="text-sm ">Description ...</label>
					<textarea name='description'  placeholder="description" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					

					<input type="submit" value='Add Service' className="btn btn-info" />
				</div>
			</div>
		</fieldset>
	</form>
        </div>
    );
};

export default AddService;