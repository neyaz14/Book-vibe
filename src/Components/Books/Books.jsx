import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
const Books = () => {
    const [books , setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    }, [])
    return (
        <div className=' my-10 mx-auto'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {books?.map(book=> <Book key={book.bookId} book={book}></Book>)}
            </div>


        </div>
    );
};

export default Books;

// to load data

/**
 * 1. sate to store loaded data
 * 2. loaded data amra baire pathabo ...tai UseEffect use korbo |
 * 3. UseEffect -- e fetch use kore data load
 * 4. then set data to state
*/