import { Book } from '../../shared/interfaces/book.interface.ts';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store.ts';

export interface BooksState {
  booksList: Book[];
  searchText: string;
  selectedGenre: string;
}

const initialState: BooksState = {
  booksList: [],
  searchText: '',
  selectedGenre: ''
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loadBooks: (state, books: { payload: Book[] }) => {
      state.booksList = books.payload;
    },
    updateSearchText: (state, searchText: { payload: string }) => {
      state.searchText = searchText.payload;
    },
    updateSelectedGenre: (state, genre: { payload: string }) => {
      state.selectedGenre = genre.payload;
    }
  }
});

export const { loadBooks, updateSearchText, updateSelectedGenre } = booksSlice.actions

export const booksList = (state: RootState) => state.books.booksList;
export const booksSearchText = (state: RootState) => state.books.searchText;
export const booksSelectedGenre = (state: RootState) => state.books.selectedGenre;

export default booksSlice.reducer
