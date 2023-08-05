import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import bg from '../../assets/events/slide1.jpg'
import { TbSquareRotatedFilled } from "react-icons/tb";
const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:80/linrayAPI/index.php?url=/allbook')
            .then(res => {
                console.log(res.data);
                setBooks(res.data)
            })
    }, [])
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} className='bg-no-repeat image-container h-[450px] bg-center bg-cover '>
                <div className='bg-black bg-opacity-70 flex flex-col justify-center items-center inset-0 h-[450px]'>
                    <h1 className='text-6xl text-white font-semibold'>Choose Your Book and Enjoy</h1>
                    <div className="flex items-center w-96 mt-6">
                        <div className="border-t-2 border-white w-36 h-0 flex-1 mr-3"></div>

                        <TbSquareRotatedFilled className='text-white' />
                        <TbSquareRotatedFilled className='text-white' />

                        <div className="border-t-2 border-white h-0 flex-1 ml-3"></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 max-w-7xl mx-auto pt-20 mb-20 gap-6'>
                {
                    books.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default Books;