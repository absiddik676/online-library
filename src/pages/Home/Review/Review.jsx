import React, { useRef } from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import bg from '../../../assets/slider/say-bg.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import clinte from '../../../assets/clinte/client1.jpg'
import clinte2 from '../../../assets/clinte/client2.jpg'
import clinte3 from '../../../assets/clinte/client3.jpg'
const Review = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-no-repeat'>
            <div className='bg-gray-900  bg-opacity-80 flex justify-center items-center'>
                <div>
                    <h1 className='text-4xl text-white font-light text-center pt-7'>What People    <span className='font-bold text-white'>Say</span></h1>
                    <div className='flex justify-center items-center'>
                        <div className="flex items-center w-96 mt-6">
                            <div className="border-t-2 border-white w-36 h-0 flex-1 "></div>

                            <TbSquareRotatedFilled className='text-white' />
                            <TbSquareRotatedFilled className='text-white' />

                            <div className="border-t-2 border-white h-0 flex-1 "></div>
                        </div>
                    </div>
                    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            speed={1200}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper h-80 mt-11 "
                        >
                            <SwiperSlide className='text-white text-center'>
                                <h1 className='text-xl'>James</h1>
                                <h1 className='text-lg my-3'>Student</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero dui, pretium non mattis eu nunc. Aenean egestas nisi vel urna tempus aliquam. Etiam fringilla tempor risus.Nulla vitae elementum felis. Vestibulum ultricies feugiat est id ornare. Morbi non dapibus ante.</p>
                                <div className="avatar mt-8">
                                    <div className="w-24 rounded-full">
                                        <img src={clinte} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='text-white text-center'>
                                <h1 className='text-xl'>Alexander</h1>
                                <h1 className='text-lg my-3'>Student</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero dui, pretium non mattis eu nunc. Aenean egestas nisi vel urna tempus aliquam. Etiam fringilla tempor risus.Nulla vitae elementum felis. Vestibulum ultricies feugiat est id ornare. Morbi non dapibus ante.</p>
                                <div className="avatar mt-8">
                                    <div className="w-24 rounded-full">
                                        <img src={clinte2} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='text-white text-center'>
                                <h1 className='text-xl'>Oliver</h1>
                                <h1 className='text-lg my-3'>Student</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero dui, pretium non mattis eu nunc. Aenean egestas nisi vel urna tempus aliquam. Etiam fringilla tempor risus.Nulla vitae elementum felis. Vestibulum ultricies feugiat est id ornare. Morbi non dapibus ante.</p>
                                <div className="avatar mt-8">
                                    <div className="w-24 rounded-full">
                                        <img src={clinte3} />
                                    </div>
                                </div>
                            </SwiperSlide>
                       
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>

                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
