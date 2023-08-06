import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { TbSquareRotatedFilled } from "react-icons/tb";
import SingleMyReqBook from '../SingleMyReqBook/SingleMyReqBook';
const MyReqBook = () => {
    const {user,loading} = useContext(AuthContext)
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:80/linrayAPI/index.php?url=/allreqbook')
        .then(res=>{
            const myBook = res?.data.filter(book=>book?.studentEmail === user?.email)
            setBooks(myBook)
            console.log(myBook);
        })
    },[user])
    
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-3'>My Requested Book</h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-3 mt-5'>
                {
                    books.map(book=><SingleMyReqBook key={book.id} book={book}></SingleMyReqBook>)
                }
            </div>
        </div>
    );
};

export default MyReqBook;