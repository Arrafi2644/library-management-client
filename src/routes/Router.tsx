import MainLayout from '@/layouts/MainLayout/MainLayout';
import AddBook from '@/pages/AddBook/AddBook';
import AllBooks from '@/pages/AllBooks/AllBooks';
import BorrowSummary from '@/pages/BorrowSummary/BorrowSummary';
import Home from '@/pages/Home/Home';
import React from 'react';
import { createBrowserRouter } from 'react-router';

const Router = () => createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/books",
                element: <AllBooks />
            },
            {
                path: "/borrow-summary",
                element: <BorrowSummary />
            },
            {
                path: "/add-book",
                element: <AddBook />
            }
        ]
    }
])

export default Router;