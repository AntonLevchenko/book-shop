import { RootState } from '../../store/store.ts';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state;
export const cartItemsCount = createDraftSafeSelector(
  selectSelf,
  (state) => state.cart.cartList.reduce(
    (acc, item) => acc += item.count, 0
  )
);

export const cartItemsPrice = createDraftSafeSelector(
  selectSelf,
  (state) => state.cart.cartList.reduce(
    (acc, item) => acc += item.count * item.book.volumeInfo.pageCount, 0
  )
)
