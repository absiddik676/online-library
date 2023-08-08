import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { FaCheckCircle } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
const AllReqBook = () => {
    const { data: allReqBook = [], refetch } = useQuery(['user'], async () => {
        const res = await axios.get(`http://localhost:80/linrayAPI/index.php?url=/allreqbook`)
        const notApproveData = res.data.filter(book => book.status  === '');
        return notApproveData
    })

    const handelApprove  =  (book) =>{
        const date = new Date()
        const newStatus = 'approved';
        axios.patch(`http://localhost/linrayAPI/index.php?url=/requestredbook/update&id=${book.id}`, {
        status: newStatus,issueDate:date})
        .then(res=>{
            console.log(res.data);
            refetch()
        })
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-3'>All Requested Books</h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Book Name </th>
                            <th>Book ID</th>
                            <th>Book image</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allReqBook.map((book, index) => <tr className='p-0'  key={book.id}>
                                <td className='pb-0'>{index + 1}</td>
                                <td className='pb-0'>{book?.studentID}</td>
                                <td className='pb-0'>{book?.studentName}</td>
                                <td className='pb-0'>
                                    {book.title}
                                </td>
                                <td className='pb-0'>{book.bookID}</td>
                                <td className='pb-0'>
                                    <div className="avatar">
                                        <div className="mask w-16 h-20">
                                            <img src={book.bookImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <th className='pb-0'>

                                    <div class="p-5">
                                        <div class="flex justify-center items-baseline flex-wrap">

                                            <div class="flex m-2">
                                                <button onClick={()=>handelApprove(book)} class="text-base  rounded-l-none rounded-r-none border-l-1 border-r-1  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">
                                                    <div class="flex leading-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit w-5 h-5 mr-1">
                                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                        </svg>
                                                        Approve</div>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllReqBook;