import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormsButton from './FormsButton';

describe('<FormsButton />', () => {
  test('it should mount', () => {
    render(<FormsButton />);
    
    const formsButton = screen.getByTestId('FormsButton');

    expect(formsButton).toBeInTheDocument();
  });
});