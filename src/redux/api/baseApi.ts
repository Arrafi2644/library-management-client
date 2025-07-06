import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}), 
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ()=> "/books",
            providesTags: ["books"]
        }),
        addBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"]
        }),
        borrowBook: builder.mutation({
            query: (borrowBookData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowBookData
            }),
            invalidatesTags: ["books"]
        })
    })
})

export const {useGetBooksQuery, useAddBookMutation, useBorrowBookMutation} = baseApi;