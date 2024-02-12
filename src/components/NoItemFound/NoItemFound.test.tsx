import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoItemFound from './NoItemFound';

describe('<NoItemFound />', () => {
  test('it should mount', () => {
    render(<NoItemFound />);
    
    const noItemFound = screen.getByTestId('NoItemFound');

    expect(noItemFound).toBeInTheDocument();
  });
});