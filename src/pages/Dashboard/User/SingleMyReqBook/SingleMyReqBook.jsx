import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
const SingleMyReqBook = ({book,handelDelete}) => {
    const {bookImg,title,author,id} = book;
    return (
        <div>
             <div className=" bg-gray-100 flex rounded-xl items-center">
                <div className="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ">
                    <div className='flex justify-center'>
                        <img className="rounded-xl w-40 h-52" src={bookImg} alt="" />
                    </div>
                    <div className=" justify-between items-center">
                        <div className=''>
                            <h1 className="mt-5 text-2xl font-semibold">{title}</h1>
                            <p className="mt-2">By {author}</p>
                        </div>
                        <div className=' justify-end flex'>
                            <button onClick={()=>handelDelete(id)} className="text-white text-md flex justify-center items-center gap-1 font-semibold bg-red-500 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-105 mt-3 "><AiOutlineClose className="w-5 h-5" /> Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMyReqBook;