import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { TbSquareRotatedFilled } from "react-icons/tb";
const ManageIssuedBook = () => {
    
    const { data: books = [], refetch } = useQuery({
        queryKey: ['notApproveBook'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:80/linrayAPI/index.php?url=/allreqbook`)
            const ApproveBook = res?.data.filter(book => book?.status === "approved")
            return ApproveBook
        }

    })
        return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-3'>Manage Issued Book</h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>

            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book Name</th>
                            <th>Book ID</th>
                            <th>Student Name</th>
                            <th>Issued Date</th>
                            <th>Return Date</th>
                            <th className='text-center'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => <tr key={book.id}>
                                <th>{index + 1}</th>
                                <td>{book.title}</td>
                                <td>{book.bookID}</td>
                                <td>{book.studentName}</td>
                                <td>{moment(book?.issueDate).format("MMM Do YYYY")}</td>
                                <td> {moment(book?.issueDate).add(7, 'days').format("MMM Do YYYY")}</td>
                                <td className='flex justify-center'>  <button
                                    className="flex items-center border rounded-md hover:bg-blue-400 hover:text-white px-3 py-1 space-x-2 text-blue-500  focus:outline-none"
                                    onClick={() => {
                                        // Implement your return logic here
                                    }}
                                >
                                    <IoIosArrowBack size={20} />
                                    <span>Returned</span>
                                </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageIssuedBook;