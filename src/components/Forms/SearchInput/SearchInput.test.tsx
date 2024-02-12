import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormsSearchInput from './FormsSearchInput';

describe('<FormsSearchInput />', () => {
  test('it should mount', () => {
    render(<FormsSearchInput />);
    
    const formsSearchInput = screen.getByTestId('FormsSearchInput');

    expect(formsSearchInput).toBeInTheDocument();
  });
});