import React, { useState, useRef, useEffect, useContext } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import { useForm } from "react-hook-form";
import animationData from '../../assets/animation/animation_lkwut5db.json';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {loginUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const formLocation = location.state?.form?.pathname || '/';
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const LottieAnimation = () => {
        const animationContainer = useRef(null);
        useEffect(() => {
            const anim = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });

            return () => {
                anim.destroy();
            };
        }, []);

        return <div ref={animationContainer} />;
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        loginUser(data.email,data.password)
        .then(result =>{
           reset();
           navigate(formLocation, { replace: true });
        })
        .catch(error=>{
            console.log(error);
            if (error.message === 'Firebase: Error (auth/wrong-password).') {
                setErrorMessage('Wrong password');
            } else {
                setErrorMessage('An error occurred. Please try again.');
            }
        })
    }

    return (
        <div>
            <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <div className='w-[500px]'>
                        <LottieAnimation />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                        {...register("email", { required: true })}
                                    />
                                    
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="flex">
                                        <input
                                            id="password"
                                            name="password"
                                            type={passwordVisible ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            className="mt-1  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                            {...register("password", { required: true })}
                                            
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ? (
                                                <RiEyeOffFill className="h-5 w-5  text-gray-400" />
                                            ) : (
                                                <RiEyeFill className="h-5 w-5 text-gray-400" />
                                            )}
                                        </button>

                                    </div>
                                    
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <button
                                    type="submit"
                                    className="w-full my-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                   Login
                                </button>
                            </form>
                            {errorMessage && <p className='text-red-600 text-center'>{errorMessage}</p>}
                            <p>New here? <Link to='/signUp' className='text-blue-600'>Create a New Account</Link></p>
                        </div>
                        <div className='flex justify-center mb-6'>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default Login;