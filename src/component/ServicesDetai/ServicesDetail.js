import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from './Review';

const ServicesDetail = () => {
    const detail = useLoaderData();
    const {img,title,description,price,quantity,_id} = detail;
	const {user} = useContext(AuthContext)
	
	const [review,setReview] = useState([])
	const [post,setPost] = useState([])
	// console.log(review)

    // console.log(detail)------


	//btn--------------
	const handelPlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Unregisterd';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price:price,
            customer: name,
            email:email,         
            message:message,
			
        }
		// console.log(order);

        fetch(`http://localhost:5000/review`, {
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
            }
            // console.log(data)
			setPost(data)
        })
        .catch(error => console.error(error))
    }

	useEffect(() => {
		fetch(`http://localhost:5000/reviews`)
		.then(res => res.json())
		.then(data => {
			setReview(data)
		})
	},[post])
    

    return (
        <div className='mb-10'>
            
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


		{
			user?.email ?
			<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
		{
			review.map(view => <Review
			key={view._id}
			view={view}
			img={img}
			></Review>)
		}
		</div>
		:
		<></>
		}

		
            {
				user?.email ?
				<section className="p-10 dark:bg-gray-800 dark:text-gray-50 my-6 ">
	<form onSubmit={handelPlaceOrder}  className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm p-4">Username</label>
					<input name='name' id="username" type="text" placeholder="Username" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm ">Username</label>
					<input name='email' id="username" type="text" placeholder="Username" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				<div className="col-span-full">
					<label  className="text-sm ">Text ...</label>
					<textarea name='message'  placeholder="message" className="p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					

					<input type="submit" value='Place your Order' className="btn btn-info" />
				</div>
			</div>
		</fieldset>
	</form>
				</section>
			: 
				<h1 className='text-3xl text-indigo-900 text-center'>Please LogIn to Add Review !</h1>
			}



        </div>
    );
};

export default ServicesDetail;