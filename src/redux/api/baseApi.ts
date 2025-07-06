import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}), 
    tagTypes: ["books", "borrow"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ()=> "/books",
            providesTags: ["books", "borrow"]
        }),
        addBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books", "borrow"]
        }),
        borrowBook: builder.mutation({
            query: (borrowBookData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowBookData
            }),
            invalidatesTags: ["books", "borrow"]
        }),
        deleteBook: builder.mutation({
            query: (bookId: string) => ({
                url: `/books/${bookId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books", "borrow"]
        }),
        getBorrow: builder.query({
            query: ()=> "/borrow",
           providesTags: ["books", "borrow"]
        
        })
    })
})

export const {useGetBooksQuery, useAddBookMutation, useBorrowBookMutation, useDeleteBookMutation, useGetBorrowQuery} = baseApi;