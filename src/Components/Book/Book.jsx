import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-72 shadow-xl border mx-auto mt-2">
                <figure>
                    <img
                        className='mt-8 rounded-lg w-40 h-[266px] '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        {
                            tags.map((tag, index) => <button
                            key={index}
                            className='btn btn-xs btn-outline mr-4'>{tag}</button>)
                        }
                    </div>
                    <div className='mb-4'>
                        <h2 className="card-title">
                            {bookName}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>

                        <p>By: {author}</p>
                    </div>
                    <div className='border border-t-dashed border-gray-700 mb-4'></div>

                    <div className="card-actions justify-between items-center">
                        <div className="border rounded-2xl p-2">{category}</div>
                        <div className="border rounded-2xl p-2">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;