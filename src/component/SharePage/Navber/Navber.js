import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navber = () => {
  const {user,logOut} = useContext(AuthContext);
  // console.log(user,logOut);-----

  const loginOut =() => {
    console.log('click');
    logOut()
    .then()
    .catch()
  }

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>

            {
                user?.email ?
                <>
                  <li><Link to='/login'><button onClick={loginOut}>LogOut</button></Link></li>
                </>
                : 
                <>

                          <li className='font-semibold'><Link to='/login'>
                      <button> Login</button>
                        </Link></li> 
                          <li className='font-semibold'><Link to='/signup'>
                      <button> Sign Up</button>
                        </Link></li> 

                </>   
            }
    
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>

        {
          user?.email ?
          <>
            <li><Link to='/login'><button onClick={loginOut}>LogOut</button></Link></li>
          </>
          : 
          <>
            <li className='font-semibold'><Link to='/login'>
              <button> Login</button>
                </Link></li> 
                  <li className='font-semibold'><Link to='/signup'>
              <button> Sign Up</button>
                </Link></li> 
          </>      
        }
                       
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Get started</Link>
        </div>
      </div>
    );
};

export default Navber;