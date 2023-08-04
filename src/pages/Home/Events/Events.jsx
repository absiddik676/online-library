import React from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import events1 from '../../../assets/events/inner-image.png'
import events2 from '../../../assets/events/even-1.jpg'
import events3 from '../../../assets/events/event-2.jpg'
import { GoTriangleRight } from "react-icons/go";
const Events = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-7xl mx-auto '>
                <h1 className='text-4xl font-light text-center pt-7'>Upcoming   <span className='font-bold text-gray-600'>Events</span></h1>
                <div className='flex justify-center items-center'>
                    <div className="flex items-center w-96 mt-6">
                        <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>

                        <TbSquareRotatedFilled className='text-blue-800' />
                        <TbSquareRotatedFilled className='text-blue-800' />

                        <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                    </div>
                </div>
                <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est <br /> Sed non eros elementum nulla sodales ullamcorper.</p>
                <div className='flex mt-10'>
                    <div className='w-1/2 flex justify-center'>
                        <img className='w-[300px]' src={events1} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <GoTriangleRight className='text-yellow-500' size={40} />
                                <h1 className='text-xl font-semibold text-gray-500'>July 20,2017</h1>
                            </div>
                            <h1 className='text-xl font-semibold text-gray-500'>02.30 Am</h1>
                        </div>
                        <div className='flex mb-7 items-center bg-white p-6 gap-7 border rounded-md'>
                            <img src={events2} alt="" />
                            <div>
                                <h2 className='text-xl text-gray-500'>Tuesday Networking & Lecture</h2>
                                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <GoTriangleRight className='text-yellow-500' size={40} />
                                <h1 className='text-xl font-semibold text-gray-500'>July 20,2017</h1>
                            </div>
                            <h1 className='text-xl font-semibold text-gray-500'>02.30 Am</h1>
                        </div>
                        <div className='flex items-center bg-white p-6 gap-7 border rounded-md'>
                            <img src={events2} alt="" />
                            <div>
                                <h2 className='text-xl text-gray-500'>Tuesday Networking & Lecture</h2>
                                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
                            </div>
                        </div>
                        <div className='flex justify-end mt-6'>
                        <button
                            className="px-6 rounded-sm bg-white py-3 text-gray-400 transition-colors hover:bg-blue-500 hover:border hover:border-blue-500 hover:text-white"
                        >
                            View more
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;