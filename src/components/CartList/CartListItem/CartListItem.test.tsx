import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartListItem from './CartListItem';

describe('<CartListItem />', () => {
  test('it should mount', () => {
    render(<CartListItem />);
    
    const cartListItem = screen.getByTestId('CartListItem');

    expect(cartListItem).toBeInTheDocument();
  });
});