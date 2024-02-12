import { СartListItem } from '../../features/cart/cartSlice.ts';

export const findBookById = (booksList: СartListItem[], bookId: string) => booksList.find(({book}) =>
  book.id === bookId
);
