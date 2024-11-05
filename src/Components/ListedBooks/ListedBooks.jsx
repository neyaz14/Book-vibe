import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/addtoDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    // why use state ?
    // ui te change hobe...sei change anar jonno useState()
    // setreadList --> function --
    //  readList --> variable -- 
    const [readList , setreadList] = useState([]);



    const allBooks = useLoaderData();
    // useE
    useEffect(()=>{
        const storeReadList = getStoreReadList();
        const storeReadListInt = storeReadList.map(id=>parseInt(id));
        const readBookList = allBooks.filter(book => storeReadListInt.includes(book.bookId));
        //  allBooks er bookId er sathe storeReadListInt er jader match korbe sesob bookId wala object er list hobe readBookList .
        setreadList(readBookList)
    },[])







    return (
        <div>
            <h1 className='text-4xl'>Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;