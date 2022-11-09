import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
   const {user,signInEmailAndPassword,updateKoroTomarProfile} = useContext(AuthContext)
   console.log(user);


   const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password,photoURL);

    signInEmailAndPassword(email,password)
    .then(result => {
        const user = result.user;
        // console.log(user);
        handleUpdateUserprofile(name,photoURL)
    })
    .catch(err => console.error(err));
    
   }



   const handleUpdateUserprofile = (name,photoURL) =>{
    const profile = {
        displayName:name,
        photoURL:photoURL
    }
    updateKoroTomarProfile(profile)
    .then(result => {
        const user = result?.user;
        console.log(user);
    })
    .catch(error => console.error(error))
  }



    return (
        <div className='p-20 '>
        <div className="hero min-h-screen bg-base-200 p-10">
<div className="hero-content flex-col lg:flex-row">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Login now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
  
    <form onSubmit={handleSignUp}>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
    </div>
    {/* <div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Photo Url</label>
					<input id="website" type="text" name='photoURL' placeholder='Photo Url' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div> */}
        {/* -- */}
        <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input name='photoURL' type="text" placeholder="Photo Url" className="input input-bordered" />
    </div>
        {/* -- */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input name='email' type="text" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name='password' type="password" placeholder="password" className="input input-bordered" />
      <label className="label">
        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
        
      </label>
    </div>
    <div className="form-control mt-6">
      
      <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Sign Up" />
    </div>

    </div>
    </form>
    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
  </div>
</div>
</div>
</div>
            </div>
    );
};

export default SignUp;