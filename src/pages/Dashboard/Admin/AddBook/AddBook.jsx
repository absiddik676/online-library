import React from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../components/Spinner';
const AddBook = () => {
    const { register, handleSubmit,  formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image',data.image[0])
        fetch('https://api.imgbb.com/1/upload?key=ba3b948b897f68e17ca6b54684432dc4',{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imageData => {
            const imgURL = imageData.data.display_url
            console.log(imgURL);
            const {title,author,category,copies,description} = data;
            const saveData = {
                title,
                author,
                category,
                copies:parseInt(copies),
                description,
                img:imgURL
            }
            console.log(saveData);
            axios.post('http://localhost:80/linrayAPI/index.php?url=/addBook',saveData)
            .then(res=>{
                reset()
                console.log(res.data);
            })

        })


       
    };
    return (
        <div className='w-full'>
            <h1 className='text-2xl font-semibold text-center mt-3'>Add a new book</h1>
            <div className='flex justify-center items-center'>
                <div className="flex items-center w-96 mt-6">
                    <div className="border-t-2 border-blue-800 w-36 h-0 flex-1 mr-3"></div>
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <TbSquareRotatedFilled className='text-blue-800' />
                    <div className="border-t-2 border-blue-800 h-0 flex-1 ml-3"></div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-6  mx-auto">
                <div className='flex gap-6'>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="title" className="block text-gray-800 font-semibold mb-2">
                            Book Name
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                            placeholder="Enter Book Name"
                            {...register("title", { required: true })}
                        />
                    </div>

                    <div className="mb-4 w-1/2">
                        <label htmlFor="author" className="block text-gray-800 font-semibold mb-2">
                            Author Name
                        </label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                            placeholder="Enter Author Name"
                            {...register("author", { required: true })}
                        />
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="copies" className="block text-gray-800 font-semibold mb-2">
                            Copies of Book
                        </label>
                        <input
                            type="number"
                            name="copies"
                            id="copies"
                            className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                            placeholder="Enter Number of Copies"
                            {...register("copies", { required: true })}
                        />
                    </div>

                    <div className="mb-4 w-1/2">
                        <label htmlFor="category" className="block text-gray-800 font-semibold mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                            {...register("category", { required: true })}
                        >
                            <option value="" disabled selected>Select Book Category</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="science-fiction">Science Fiction</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="description" className="block text-gray-800 font-semibold mb-2">
                            Book Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            rows="4" // Adjust the number of rows based on your design preference
                            className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-400 resize-none"
                            placeholder="Enter Book Description"
                            {...register("description", { required: true })}
                        />
                    </div>
                    <fieldset className="w-1/2 space-y-1 dark:text-gray-100">
                        <label for="files" className="block text-sm font-medium">Attachments</label>
                        <div className="flex">
                        <input {...register("image", { required: true })} type="file" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                           
                        </div>
                    </fieldset>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;