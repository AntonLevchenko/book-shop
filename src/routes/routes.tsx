import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ShopPage from '../components/pages/ShopPage/ShopPage.tsx';
import BookDetailsPage from '../components/pages/BookDetailsPage/BookDetailsPage.tsx';
import CartPage from '../components/pages/CartPage/CartPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ShopPage />
      },
      {
        path: `:bookId`,
        element: <BookDetailsPage />
      },
      {
        path: `cart`,
        element: <CartPage />
      }
    ],
  },
]);
