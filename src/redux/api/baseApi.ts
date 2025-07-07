import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-server-self.vercel.app/api' }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
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
    updateBook: builder.mutation({
      query: (bookData) => ({
        url: `/books/${bookData._id}`, 
        method: "PUT",             
        body: bookData
      }),
      invalidatesTags: ["books", "borrow"]
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE"
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
    getBorrow: builder.query({
      query: () => "/borrow",
      providesTags: ["books", "borrow"]
    })
  })
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation, 
  useBorrowBookMutation,
  useDeleteBookMutation,
  useGetBorrowQuery
} = baseApi;
