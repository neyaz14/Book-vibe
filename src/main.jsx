import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },{
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },{
        path: 'listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },{
        path:'pagestoread',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
