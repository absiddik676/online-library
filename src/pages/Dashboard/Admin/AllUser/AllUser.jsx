import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { MdPersonAdd } from 'react-icons/md';

const AllUser = () => {
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await axios.get(`http://localhost:80/linrayAPI/index.php?url=/alluser`)
        return res.data
    })
    console.log(users);
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-3'>Manage User</h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>

                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />

                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <button
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            <MdPersonAdd className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                            Make Admin
                                        </button>
                                    </td>
                                    <th>
                                        <button
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            <FaTrash className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                            Delete
                                        </button>
                                    </th>
                                </tr>)
                            }



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;