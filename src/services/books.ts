import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BooksListApiResponse } from '../shared/interfaces/api/books-api.interface.ts';
import { Book } from '../shared/interfaces/book.interface.ts';

export const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/'
  }),
  endpoints: (builder) => ({
    getBooksList: builder.query<BooksListApiResponse, {query: string, genre: string}>({
      query: ({query, genre}) =>
        `volumes?q=${query} subject:${genre}`
    }),
    getBook: builder.query<Book, string>({
      query: (bookId) =>
        `volumes/${bookId}`
    }),
  }),
})

export const { useGetBooksListQuery, useGetBookQuery } = booksApi
