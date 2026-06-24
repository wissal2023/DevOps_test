import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/HomePage';

test('renders HomePage main sections', () => {
  render(<HomePage />);

  // Navbar component should render a navigation element
  expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);

  // “Global Leaders Trade” appears multiple times on the home page.
  // Use a plural-safe query.
  expect(screen.getAllByText(/Global Leaders Trade/i).length).toBeGreaterThan(0);

});

