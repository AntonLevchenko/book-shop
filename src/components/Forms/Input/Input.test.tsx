import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormsInput from './FormsInput';

describe('<FormsInput />', () => {
  test('it should mount', () => {
    render(<FormsInput />);
    
    const formsInput = screen.getByTestId('FormsInput');

    expect(formsInput).toBeInTheDocument();
  });
});