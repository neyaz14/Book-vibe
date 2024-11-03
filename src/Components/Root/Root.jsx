import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import ListedBooks from '../ListedBooks/ListedBooks';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            
            <Navbar></Navbar>

            <Outlet>
                <ListedBooks></ListedBooks>

                
            </Outlet>


            <Footer></Footer>
        </div>
    );
};

export default Root;