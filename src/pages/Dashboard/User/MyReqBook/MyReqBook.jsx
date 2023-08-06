import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { TbSquareRotatedFilled } from "react-icons/tb";
const MyReqBook = () => {
    const {user} = useContext(AuthContext)
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:80/linrayAPI/index.php?url=/allreqbook')
        .then(res=>{
            console.log(res.data);
            const myBook = res?.data.filter(book=>book?.studentEmail === user?.email)
            setBooks(myBook)
        })
    },[])
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
        </div>
    );
};

export default MyReqBook;