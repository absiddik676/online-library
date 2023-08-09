import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { AuthContext } from '../../../../provider/AuthProvider';
import { data } from 'autoprefixer';
import moment from 'moment/moment';
const MyIssuedBook = () => {
    const { user, loading } = useContext(AuthContext)
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:80/linrayAPI/index.php?url=/allreqbook')
            .then(res => {
                const myBook = res?.data.filter(book => book?.studentEmail === user?.email)
                const issuedBook = myBook.filter(book => book.status === 'approved')
                setBooks(issuedBook)
            })
    }, [user])
    console.log(books);
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-3'>My Issued Book</h1>
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
                            <th>#</th>
                            <th>Book Image</th>
                            <th>Book Name</th>
                            <th>Book ID</th>
                            <th>Issue Date</th>
                            <th>Return Date</th>
                            <th>Return States</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => <tr key={book.id}>
                                <th>{index} </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask  w-14 h-14 rounded-md">
                                                <img src={book?.bookImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{book.title}</td>
                                <td>
                                    {book?.bookID}
                                </td>
                                <td>{moment(book?.issueDate).format("MMM Do YYYY")}</td>
                                <td> { moment(book?.issueDate).add(7, 'days').format("MMM Do YYYY") }
                                </td>
                                <td>{book?.returnStatus === 'returned' ? 'Returned' : 'Not Returned Yet'}</td>

                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyIssuedBook;