import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import signup from '../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }


    return (
        <div>
            <Helmet>
                <title>Car Doctor || Login</title>
            </Helmet>
        <Navbar/>

        <div className='flex justify-center items-center gap-4 mt-20 '>
            <img className='' src={signup} alt="" />

            <div className='w-[40%] space-y-4 border border-dotted border-black p-11 rounded-lg'>
            <form onSubmit={handleSignIn} className='space-y-4 '>
               
                <div className='flex flex-col gap-4'>
                    <label >
                        <span className='font-bold text-[18px] text-[#444444]'>Email</span>
                    </label>
                    <input className='border border-[#E8E8E8] rounded-[10px] p-4' type="email" name='email' placeholder='Your Email' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label >
                        <span className='font-bold text-[18px] text-[#444444]'>Password</span>
                    </label>
                    <input className='border border-[#E8E8E8] rounded-[10px] p-4' type="password" name='password' placeholder='Enter Password' />
                </div>
                <input className='btn btn-primary w-full' type="submit" value="Sign In" />
            </form>
            <p className='text-center font-medium text-[18px]'>Or Signin With</p>
            <div className='text-center font-bold'>
                
                <button className='text-5xl '><FcGoogle/></button> 
                <p>Have An Account? <Link className='text-primary' to='/signup'>Sign up</Link> </p>
            </div>
            
            </div>
        </div>
    </div>
    );
};

export default Login;