import { FC } from 'react';
import styles from './CartList.module.scss';
import { Book } from '../../shared/interfaces/book.interface.ts';
import CartListItem from './CartListItem/CartListItem.tsx';
import { useAppDispatch } from '../../store/hooks.ts';
import { removeBook } from '../../features/cart/cartSlice.ts';

interface CartListProps {
  books: {
    count: number;
    book: Book;
  }[];
}

const CartList: FC<CartListProps> = ({books}) => {
  const dispatch = useAppDispatch();

  const onRemove = (book: Book) => {
    dispatch(removeBook(book));
  }

  return <div className={styles.CartList} data-testid="CartList">
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {books.map((product) => (
        <li key={product.book.id}>
          <CartListItem book={product.book} count={product.count} onRemove={onRemove}/>
        </li>
      ))}
    </ul>
  </div>
};

export default CartList;
