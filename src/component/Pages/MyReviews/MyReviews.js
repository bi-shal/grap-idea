import React, { useEffect, useState } from 'react';

const MyReviews = () => {

    const [myReview,setMyreview] = useState([])
    console.log(myReview)

    useEffect(() => {
		fetch(`http://localhost:5000/reviews`)
		.then(res => res.json())
		.then(data => {
			setMyreview(data)
		})
	},[])

    return (
        <div>
            <h1> MY reviews</h1>
        </div>
    );
};

export default MyReviews;