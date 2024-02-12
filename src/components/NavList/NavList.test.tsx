import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavList from './NavList';

describe('<NavList />', () => {
  test('it should mount', () => {
    render(<NavList />);
    
    const navList = screen.getByTestId('NavList');

    expect(navList).toBeInTheDocument();
  });
});