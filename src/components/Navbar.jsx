import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; //
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
  const {user,signOff}= useContext(AuthContext);

  const handleSignout = ()=>{
    signOff()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
    const navItems = <>
    <li className='hover:bg-primary hover:text-white rounded-lg'><Link to='/'>Home</Link></li>
    <li className='hover:bg-primary hover:text-white rounded-lg'><Link to='/about'>About</Link></li>
    <li className='hover:bg-primary hover:text-white rounded-lg'><Link to='/services'>Services</Link></li>
    <li className='hover:bg-primary hover:text-white rounded-lg'><Link to='/blog'>Blog</Link></li>
    <li className='hover:bg-primary hover:text-white rounded-lg'><Link to='/contact'>Contact</Link></li>
    {
      user ? <li className='hover:bg-primary hover:text-white rounded-lg'><button onClick={handleSignout}>logout</button></li> : <li className='hover:bg-primary hover:text-white rounded-lg'><Link to='/login'>login</Link></li>
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
       
        
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-[18px] ">
   {navItems}
      
      
    </ul>
  </div>
  <div className="navbar-end flex gap-7">
    <MdOutlineShoppingBag className='text-4xl' />
    <CiSearch className='text-4xl' />
    <Link to='/login' ><button className='border border-primary rounded-md text-primary px-[28px] py-[19px] font-semibold'>Appointment</button></Link>
  </div>
</div>
    );
};

export default Navbar;