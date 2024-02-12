import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenreNavigation from './GenreNavigation';

describe('<GenreNavigation />', () => {
  test('it should mount', () => {
    render(<GenreNavigation />);
    
    const genreNavigation = screen.getByTestId('GenreNavigation');

    expect(genreNavigation).toBeInTheDocument();
  });
});