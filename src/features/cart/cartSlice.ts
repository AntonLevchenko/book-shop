import { Book } from '../../shared/interfaces/book.interface.ts';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store.ts';
import { findBookById } from '../../shared/helpers/cart.helpers.ts';

export interface СartListItem {
  count: number;
  book: Book;
}
export interface CartState {
  cartList: СartListItem[]
}

const initialState: CartState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook: (state, newBook: { payload: Book }) => {
      const bookInCart = findBookById(state.cartList, newBook.payload.id);

      if (bookInCart) {
        bookInCart.count++;
        return
      }

      state.cartList.push({
        count: 1,
        book: newBook.payload
      })
    },
    removeBook: (state, newBook: { payload: Book }) => {
      state.cartList = state.cartList.filter(({book}) => book.id !== newBook.payload.id);
    }
  }
});

export const { addBook, removeBook } = cartSlice.actions

export const cartBooks = (state: RootState) => state.cart.cartList;

export default cartSlice.reducer
