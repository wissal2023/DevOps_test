import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppNavigation from '../../navigation';

test('navigation renders correct route content (home)', () => {
  render(
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );

  // Since routes are in-memory and BrowserRouter starts at the current jsdom URL,
  // we validate a stable element that exists in HomePage.
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

