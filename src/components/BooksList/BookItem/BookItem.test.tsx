import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookItem from './BookItem';

describe('<BookItem />', () => {
  test('it should mount', () => {
    render(<BookItem />);
    
    const bookItem = screen.getByTestId('BookItem');

    expect(bookItem).toBeInTheDocument();
  });
});