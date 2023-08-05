import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../../assets/slider/slide1.jpg'
import slider2 from '../../../assets/slider/slide2.jpg'
import slider3 from '../../../assets/slider/slide3.jpg'
import slider4 from '../../../assets/slider/slide4.jpg'
import { TbSquareRotatedFilled } from "react-icons/tb";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='h-screen'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper h-screen"
            >
                <SwiperSlide style={{ backgroundImage: `url(${slider1})` }} className='bg-no-repeat'>
                    <div className='bg-black w-full h-full bg-opacity-70 flex justify-center items-center'>
                        <div className='text-white text-center'>
                            <h1 className='text-6xl font-semibold mb-4'>More Than 458,948 Book Over <br /> Here</h1>
                            <p className='text-lg'>orem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br />
                                est Sed non eros elementum nulla sodales ullamcorper.</p>
                                <div className='flex justify-center items-center'>
                            <div className="flex items-center w-96 mt-6">
                                <div className="border-t-2 border-white w-36 h-0 flex-1 mr-3"></div>

                                <TbSquareRotatedFilled className='text-white' />
                                <TbSquareRotatedFilled className='text-white' />

                                <div className="border-t-2 border-white h-0 flex-1 ml-3"></div>
                            </div>
                            </div>
                            <div>
                                <div class=" h-24 flex justify-center items-center mt-7">
                                    <form>
                                        <div className="w-[500px] shrink-0">
                                            <div className="flex space-x-4">
                                                <div className="flex rounded-md overflow-hidden w-full">
                                                    <input type="text" placeholder='Search book' class="w-full pl-7 rounded-md rounded-r-none" />
                                                    <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${slider2})` }} className='bg-no-repeat'>
                    <div className='bg-black w-full h-full bg-opacity-70 flex justify-center items-center'>
                        <div className='text-white text-center'>
                            <h1 className='text-6xl font-semibold mb-4'>More Than 458,948 Book Over <br /> Here</h1>
                            <p className='text-lg'>orem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br />
                                est Sed non eros elementum nulla sodales ullamcorper.</p>
                                <div className='flex justify-center items-center'>
                            <div className="flex items-center w-96 mt-6">
                                <div className="border-t-2 border-white w-36 h-0 flex-1 mr-3"></div>

                                <TbSquareRotatedFilled className='text-white' />
                                <TbSquareRotatedFilled className='text-white' />

                                <div className="border-t-2 border-white h-0 flex-1 ml-3"></div>
                            </div>
                            </div>
                            <div>
                                <div class=" h-24 flex justify-center items-center mt-7">
                                    <form>
                                        <div className="w-[500px] shrink-0">
                                            <div className="flex space-x-4">
                                                <div className="flex rounded-md overflow-hidden w-full">
                                                    <input type="text" placeholder='Search book' class="w-full pl-7 rounded-md rounded-r-none" />
                                                    <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${slider3})` }} className='bg-no-repeat'>
                    <div className='bg-black w-full h-full bg-opacity-70 flex justify-center items-center'>
                        <div className='text-white text-center'>
                            <h1 className='text-6xl font-semibold mb-4'>More Than 458,948 Book Over <br /> Here</h1>
                            <p className='text-lg'>orem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br />
                                est Sed non eros elementum nulla sodales ullamcorper.</p>
                                <div className='flex justify-center items-center'>
                            <div className="flex items-center w-96 mt-6">
                                <div className="border-t-2 border-white w-36 h-0 flex-1 mr-3"></div>

                                <TbSquareRotatedFilled className='text-white' />
                                <TbSquareRotatedFilled className='text-white' />

                                <div className="border-t-2 border-white h-0 flex-1 ml-3"></div>
                            </div>
                            </div>
                            <div>
                                <div class=" h-24 flex justify-center items-center mt-7">
                                    <form>
                                        <div className="w-[500px] shrink-0">
                                            <div className="flex space-x-4">
                                                <div className="flex rounded-md overflow-hidden w-full">
                                                    <input type="text" placeholder='Search book' class="w-full pl-7 rounded-md rounded-r-none" />
                                                    <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${slider4})` }} className='bg-no-repeat'>
                    <div className='bg-black w-full h-full bg-opacity-70 flex justify-center items-center'>
                        <div className='text-white text-center'>
                            <h1 className='text-6xl font-semibold mb-4'>More Than 458,948 Book Over <br /> Here</h1>
                            <p className='text-lg'>orem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br />
                                est Sed non eros elementum nulla sodales ullamcorper.</p>
                            <div className='flex justify-center items-center'>
                            <div className="flex items-center w-96 mt-6">
                                <div className="border-t-2 border-white w-36 h-0 flex-1 mr-3"></div>

                                <TbSquareRotatedFilled className='text-white' />
                                <TbSquareRotatedFilled className='text-white' />

                                <div className="border-t-2 border-white h-0 flex-1 ml-3"></div>
                            </div>
                            </div>

                            <div>
                                <div class=" h-24 flex justify-center items-center mt-7">
                                    <form>
                                        <div className="w-[500px] shrink-0">
                                            <div className="flex space-x-4">
                                                <div className="flex rounded-md overflow-hidden w-full">
                                                    <input type="text" placeholder='Search book' class="w-full pl-7 rounded-md rounded-r-none" />
                                                    <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="5" cy="5" r="2"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;