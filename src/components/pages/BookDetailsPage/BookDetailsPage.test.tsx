import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PagesBookDetailsPage from './PagesBookDetailsPage';

describe('<PagesBookDetailsPage />', () => {
  test('it should mount', () => {
    render(<PagesBookDetailsPage />);
    
    const pagesBookDetailsPage = screen.getByTestId('PagesBookDetailsPage');

    expect(pagesBookDetailsPage).toBeInTheDocument();
  });
});