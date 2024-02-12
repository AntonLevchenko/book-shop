import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BooksList from './BooksList';

describe('<BooksList />', () => {
  test('it should mount', () => {
    render(<BooksList />);
    
    const booksList = screen.getByTestId('BooksList');

    expect(booksList).toBeInTheDocument();
  });
});