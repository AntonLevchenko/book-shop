import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShopPage from './ShopPage';

describe('<PagesShopPage />', () => {
  test('it should mount', () => {
    render(<ShopPage />);
    
    const pagesShopPage = screen.getByTestId('PagesShopPage');

    expect(pagesShopPage).toBeInTheDocument();
  });
});
