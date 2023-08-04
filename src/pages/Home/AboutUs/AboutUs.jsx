import React from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { BsPersonVcard } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { BiSolidBookAlt, BiBookReader } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import slider1 from '../../../assets/about-slider/slide1.jpg'
import slider2 from '../../../assets/about-slider/slide2.jpg'
import slider3 from '../../../assets/about-slider/slide3.jpg'
import slider4 from '../../../assets/about-slider/slide4.jpg'
import slider5 from '../../../assets/about-slider/slide5.jpg'
import slider6 from '../../../assets/about-slider/slide6.jpg'
const AboutUs = () => {
    return (
        <div className='py-12 bg-[#f5f5f5]'>
            <h1 className='text-4xl font-light text-center'>About <span className='font-bold text-gray-600'>Us</span></h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>

                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />

                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <h1 className='text-center my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br /> est Sed non eros elementum nulla sodales ullamcorper.</h1>
            <div className='max-w-7xl mx-auto'>
                <div className='flex gap-2'>
                    <TbSquareRotatedFilled className='text-yellow-400' size={26} />
                    <TbSquareRotatedFilled className='text-yellow-400' size={26} />
                    <TbSquareRotatedFilled className='text-yellow-400' size={26} />
                </div>
                <div className='flex gap-5'>
                    <div className='w-2/3'>
                        <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies eros pellentesque eros interdum, a efficitur tellus malesuada. Nunc non metus quis elit dictum ultricies. Quisque ultricies aliquam arcu.</p>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <div className="flex items-center w-44 mt-6">
                                    <BsPersonVcard className='text-blue-800' size={26} />
                                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                                </div>
                                <h1 className='text-3xl my-3 font-semibold text-gray-600'>Member Card</h1>
                                <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque

                                </p>
                            </div>
                            <div>
                                <div>
                                    <div className="flex items-center w-44 mt-6">
                                        <FaMedal className='text-blue-800' size={26} />
                                        <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                                    </div>
                                    <h1 className='text-3xl my-3 font-semibold text-gray-600'>High Quality Books</h1>
                                    <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque

                                    </p>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <div className="flex items-center w-44 mt-6">
                                        <BiBookReader className='text-blue-800' size={26} />
                                        <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                                    </div>
                                    <h1 className='text-3xl my-3 font-semibold text-gray-600'>Free All Books</h1>
                                    <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque

                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="flex items-center w-44 mt-6">
                                        <BiSolidBookAlt className='text-blue-800' size={26} />
                                        <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                                    </div>
                                    <h1 className='text-3xl my-3 font-semibold text-gray-600'>Up To Date Books</h1>
                                    <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/3 flex justify-center items-center'>
                        <div className=''>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper w-72 "
                            >
                                <SwiperSlide>
                                    <img src={slider1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider3} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider4} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider5} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider6} alt="" />
                                </SwiperSlide>
                               
                            </Swiper>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;