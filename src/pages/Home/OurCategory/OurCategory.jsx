import React from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { BiMusic } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";
import { PiGlobeStandDuotone } from "react-icons/pi";
import { ImLibrary } from "react-icons/im";
const OurCategory = () => {
    return (
        <div className='my-8'>
            <h1 className='text-4xl font-light text-center'>Our  <span className='font-bold text-gray-600'>Category</span></h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>

                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />

                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est <br /> Sed non eros elementum nulla sodales ullamcorper.

            </p>
            <div className='max-w-7xl mx-auto grid grid-cols-4  gap-7  mt-10'>
                <div className="w-64 h-64 bg-white rounded-lg border-2 border-gray-300 p-4 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:border-blue-500  flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="w-20  h-20 bg-blue-800 transform rotate-45 rounded-md flex justify-center items-center">
                            <BiMusic className='transform  -rotate-45 text-white' size={24} />
                        </div>
                        <div className="flex items-center mt-6 my-6">
                            <div className="border-t-2 border-gray-400 w-36 h-0 flex-1 "></div>
                            <TbSquareRotatedFilled className='text-gray-400' />
                            <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                        </div>
                        <button
                            className="px-4 py-2 text-gray-400 transition-colors hover:bg-blue-500 hover:border hover:border-blue-500 hover:text-white"
                        >
                            Music and Art
                        </button>
                    </div>
                </div>
                <div className="w-64 h-64 bg-white rounded-lg border-2 border-gray-300 p-4 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:border-pink-600   flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="w-20  h-20 bg-pink-600 transform rotate-45 rounded-md flex justify-center items-center">
                            <FaSearchDollar className='transform  -rotate-45 text-white' size={24} />
                        </div>
                        <div className="flex items-center mt-6 my-6">
                            <div className="border-t-2 border-gray-400 w-36 h-0 flex-1 "></div>
                            <TbSquareRotatedFilled className='text-gray-400' />
                            <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                        </div>
                        <button
                            className="px-4 py-2 text-gray-400 transition-colors hover:bg-pink-600  hover:border hover:border-pink-600  hover:text-white"
                        >
                            Marketing
                        </button>
                    </div>
                </div>
                <div className="w-64 h-64 bg-white rounded-lg border-2 border-gray-300 p-4 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:border-yellow-500  flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="w-20  h-20 bg-yellow-500 transform rotate-45 rounded-md flex justify-center items-center">
                            <ImLibrary className='transform  -rotate-45 text-white' size={24} />
                        </div>
                        <div className="flex items-center mt-6 my-6">
                            <div className="border-t-2 border-gray-400 w-36 h-0 flex-1 "></div>
                            <TbSquareRotatedFilled className='text-gray-400' />
                            <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                        </div>
                        <button
                            className="px-4 py-2 text-gray-400 transition-colors hover:bg-yellow-500 hover:border hover:border-yellow-500 hover:text-white"
                        >
                           Politic
                        </button>
                    </div>
                </div>
                <div className="w-64 h-64 bg-white rounded-lg border-2 border-gray-300 p-4 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:border-green-500   flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="w-20  h-20 bg-green-500 transform rotate-45 rounded-md flex justify-center items-center">
                            <PiGlobeStandDuotone className='transform  -rotate-45 text-white' size={24} />
                        </div>
                        <div className="flex items-center mt-6 my-6">
                            <div className="border-t-2 border-gray-400 w-36 h-0 flex-1 "></div>
                            <TbSquareRotatedFilled className='text-gray-400' />
                            <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                        </div>
                        <button
                            className="px-4 py-2 text-gray-400 transition-colors hover:bg-green-500  hover:border hover:border-green-500  hover:text-white"
                        >
                           Gaeography
                        </button>
                    </div>
                </div>
              

            </div>

        </div>
    );
};

export default OurCategory;