import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import {addToSTOREreadLIST} from '../../Utility/addtoDB';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    console.log(id);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const {bookId: currentBookId , bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleMarkasREAD = (id) =>{
        
        // 1. what to store : boi er id list korbo 
        // 2. where to store : 
        // 3. array , list , collection : 
        // 4. Check if the book isnt already in the list
        addToSTOREreadLIST(id);
    }


    return (
        <div className='border border-white p-5 m-5'>

            <div className='md:flex gap-7 '>
                <figure>
                    <img className='w-[80%] h-full' src={image} alt="" />
                </figure>
                <div className='w-[70%]'>
                    <h1 className='text-4xl'>{bookName}</h1>
                    <p>By: {author}</p>
                    <hr />
                    <p>{category}</p>
                    <p><span className='font-bold'>Review:</span> {review}</p>
                    <div className='mt-16'>
                        <button onClick={()=>handleMarkasREAD(bookId)} className='{currentBookId} btn btn-outline mr-6'>Read</button>
                        <button className='btn btn-primary'>Wishlist</button>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default BookDetail;