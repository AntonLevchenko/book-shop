import { FC } from 'react';
import styles from './CartPage.module.scss';
import CartList from '../../CartList/CartList.tsx';
import { useAppSelector } from '../../../store/hooks.ts';
import { cartBooks } from '../../../features/cart/cartSlice.ts';
import Container from '../../Container/Container.tsx';
import { cartItemsPrice } from '../../../features/cart/cartSelectors.ts';
import { Link } from 'react-router-dom';

interface PagesCartPageProps {}

const PagesCartPage: FC<PagesCartPageProps> = () => {
  const books = useAppSelector(cartBooks);
  const totalPrice = useAppSelector(cartItemsPrice);

  return <div className={styles.PagesCartPage} data-testid="PagesCartPage">
    <Container className="pt-[150px]">
      <CartList books={books} />
      <div className="border-t border-gray-200 mt-6 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  </div>
};

export default PagesCartPage;
