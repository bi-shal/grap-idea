import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn,user,logOut} = useContext(AuthContext)
    // console.log(user)

    const location = useLocation();
    // console.log(location)
    const from = location?.state?.from?.pathname || '/' ;
    // console.log(from);
    const navigate = useNavigate();




const loginHadle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    //logIn
    logIn(email,password)
    .then(result => {
        const user = result.user;
        // console.log(user);
        navigate(from,{replace:true})
    })
    .catch(err => console.error(err));

    //logOut
    logOut()
}



    return (
        <div className='p-20'>
        <div className="hero min-h-screen bg-base-200 p-10">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Login now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <form onSubmit={loginHadle}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input name="email" type="text" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" type="text" placeholder="password" className="input input-bordered" />
      <label className="label">
        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
        <ul className='text-red-600'><li><Link to='/signup'>signup</Link></li></ul>
      </label>
    </div>
    <div className="form-control mt-6">
    <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Sign Up" />
    </div>

    </div>
    </form>


  </div>
</div>
</div>
</div>
    </div>
    );
};

export default Login;