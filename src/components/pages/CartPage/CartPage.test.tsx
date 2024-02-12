import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PagesCartPage from './PagesCartPage';

describe('<PagesCartPage />', () => {
  test('it should mount', () => {
    render(<PagesCartPage />);
    
    const pagesCartPage = screen.getByTestId('PagesCartPage');

    expect(pagesCartPage).toBeInTheDocument();
  });
});