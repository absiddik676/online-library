import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import animationData from '../../assets/animation/animation_lkwwbwgq.json';
const Signup = () => {
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
    return (
        <div>
            <div >
            <div className="min-h-screen pt-14 bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-4/6 bg-white relative rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                            Sign up for online library 
                        </h2>
                        
                        <form  className="space-y-6">
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        autoComplete="name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                        // {...register("name", { required: true })}

                                    />
                                     {/* {errors.name?.type === 'required' && <p className='text-red-600'> Name is required </p>} */}
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                        // {...register("email", { required: true })}
                                    />
                                    {/* {errors.email?.type === 'required' && <p className='text-red-600'> Email is required </p>} */}
                                </div>
                            </div>
                        
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                        // {...register("password", { 
                                        //     required: true,
                                        //     minLength:6,
                                        //     pattern:/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
                                        //  })}
                                    />
                                    {/* {errors.password?.type === 'required' && <p className='text-red-600'> Password is required </p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600'> Password must be 6 character</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-600'> Password must have 1 uppercase and 1 spacial character </p>} */}
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Confirm Password"
                                        // {...register("confirmPassword", { 
                                        //     required: true,
                                        //     minLength: 6,
                                        //     pattern:/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
                                        //  })}
                                    />
{/* 
                                    {errors.confirmPassword?.type === 'required' && <p className='text-red-600'> Password is required </p>}
                                    {errors.confirmPassword?.type === 'minLength' && <p className='text-red-600'> Password must be 6 character</p>}
                                    {errors.confirmPassword?.type === 'pattern' && <p className='text-red-600'> Password must have 1 uppercase and 1 spacial character </p>} */}
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={''}
                                        
                                    >
                                        <option value="" disabled >Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                                        Photo URL
                                    </label>
                                    <input
                                        id="photoURL"
                                        name="photoURL"
                                        type="text"
                                        autoComplete="url"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Photo URL"
                                        
                                    />
                                    
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        {/* <p className='text-red-600 text-center pt-5'>{errorMessage}</p> */}
                        <p className='text-center py-5 '>Already registered? <Link to='/login' className='text-blue-600'>Go to log in</Link></p>
                       
                    </div>

                </div>
            </div>
            <div className='w-48 absolute bottom-9 left-6'><LottieAnimation /></div>
        </div>
        </div>
    );
};

export default Signup;