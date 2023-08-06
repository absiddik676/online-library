import React, { useContext } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { AuthContext } from '../../provider/AuthProvider';
import useStudent from '../../Hooks/useStudent';
import axios from 'axios';
const SingleBook = ({ book }) => {

    const { title, author, category, copies, description, img } = book;
    const {user} = useContext(AuthContext)
    const user1 = useStudent()
    console.log(user1);
    const handelRequest = (book) =>{
        const reqBookData = {
            title:book?.title,
            bookID:book?.id,
            studentName:user1?.isStudent?.[0]?.name,
            studentID:user1?.isStudent?.[0]?.id,
            studentEmail:user1?.isStudent?.[0]?.email,
            bookImg:book?.img
        }
        console.log(reqBookData);
        axios.post('http://localhost:80/linrayAPI/index.php?url=/requestedBook',reqBookData)
            .then(res=>{
                console.log(res.data);
            })
    }
    return (
        <div>
            <div className='border-2  w-full h-[350px] relative p-5 hover:shadow-lg hover:border-yellow-300'>
                <div className='flex gap-5' >
                    <img className='w-32 h-52' src={img} alt="" />
                    <div>
                        <h1 className='text-xl font-semibold font-montserrat'>{title}</h1>
                        <p className='text my-2'>By {author}</p>
                        <p>{description}</p>
                        <h4 className='text-lg font-semibold'>Available book: {copies}</h4>

                    </div>

                </div>
                <div className='flex justify-end '>
                    <button
                    onClick={()=>handelRequest(book)}
                        className="flex absolute bottom-0 mb-2 items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        <BsPencilSquare className="mr-2" />
                        Request
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SingleBook;