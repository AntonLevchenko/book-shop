import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkWrapper from './LinkWrapper.tsx';

describe('<Link />', () => {
  test('it should mount', () => {
    render(<Link />);
    
    const link = screen.getByTestId('Link');

    expect(link).toBeInTheDocument();
  });
});
