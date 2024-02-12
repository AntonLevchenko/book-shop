import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SidebarNavigation from './SidebarNavigation';

describe('<SidebarNavigation />', () => {
  test('it should mount', () => {
    render(<SidebarNavigation />);
    
    const sidebarNavigation = screen.getByTestId('SidebarNavigation');

    expect(sidebarNavigation).toBeInTheDocument();
  });
});