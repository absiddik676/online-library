import React, { useRef } from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import { Autoplay, Navigation } from 'swiper/modules';
import team1 from '../../../assets/clintt/team1.jpg'
import team2 from '../../../assets/clintt/team-2.jpg'
import team3 from '../../../assets/clintt/team-3.jpg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const MeetOurStaff = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h1 className='text-4xl font-light text-center'>Meet Our  <span className='font-bold text-gray-600'>Staff</span></h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>

                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />

                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <h1 className='text-center my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br /> est Sed non eros elementum nulla sodales ullamcorper.</h1>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay,  Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper h-[550px]"
                >

                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <h1 className='text-2xl font-semibold text-gray-500 mt-2'>Steven William</h1>
                            <p className='my-2'>Director</p>
                            <div className='flex gap-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>
                            <div className="flex items-center mt-6 my-6">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <img className='w-72 mb-7' src={team1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <img className='w-72 mt-7' src={team2} alt="" />
                            <div className="flex items-center mt-6 ">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <h1 className='text-2xl font-semibold text-gray-500 '>Charlie</h1>
                            <p className='my-2'>Manager</p>
                            <div className='flex gap-7 mb-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <h1 className='text-2xl font-semibold text-gray-500 mt-2'>Amelia</h1>
                            <p className='my-2'>Librarian</p>
                            <div className='flex gap-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>
                            <div className="flex items-center mt-6 my-6">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <img className='w-72 mb-7' src={team3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <img className='w-72 mt-7' src={team2} alt="" />
                            <div className="flex items-center mt-6 ">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <h1 className='text-2xl font-semibold text-gray-500 '>James</h1>
                            <p className='my-2'>Manager</p>
                            <div className='flex gap-7 mb-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <h1 className='text-2xl font-semibold text-gray-500 mt-2'>Steven William</h1>
                            <p className='my-2'>Director</p>
                            <div className='flex gap-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>
                            <div className="flex items-center mt-6 my-6">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <img className='w-72 mb-7' src={team1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <img className='w-72 mt-7' src={team3} alt="" />
                            <div className="flex items-center mt-6 ">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <h1 className='text-2xl font-semibold text-gray-500 '>William</h1>
                            <p className='my-2'>Manager</p>
                            <div className='flex gap-7 mb-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center border '>
                            <h1 className='text-2xl font-semibold text-gray-500 mt-2'>Steven William</h1>
                            <p className='my-2'>Director</p>
                            <div className='flex gap-7'>
                                <FaFacebook size={20} color="#3b5998" />
                                <FaTwitter size={20} color="#1DA1F2" />
                                <FaLinkedin size={20} color="#0077B5" />
                                <FaInstagram size={20} color="#C13584" />
                            </div>
                            <div className="flex items-center mt-6 my-6">
                                <div className="border-t-2 border-gray-400 w-72 h-0 flex-1 "></div>
                                <TbSquareRotatedFilled className='text-gray-400' />
                                <div className="border-t-2 border-gray-400 h-0 flex-1 "></div>
                            </div>
                            <img className='w-72 mb-7' src={team1} alt="" />
                        </div>
                    </SwiperSlide>
                  
                    
                    
                
                   
                    

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="5" cy="5" r="2"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </>
        </div>
    );
};

export default MeetOurStaff;