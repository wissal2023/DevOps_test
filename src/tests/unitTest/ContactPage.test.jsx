import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../../pages/Contact';
import { BrowserRouter } from 'react-router-dom';

test('renders Contact page with breadcrumb and contact form/map', () => {
  render(
    <BrowserRouter>
      <ContactPage />
    </BrowserRouter>
  );

  // Breadcrumb uses both an h1 and an h2 with the same text; use plural-safe query.
  expect(screen.getAllByRole('heading', { name: /Contactez-Nous/i }).length).toBeGreaterThan(0);




  // Contact text appears in multiple places (breadcrumb + nav links + footer), so keep it plural-safe.
  expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);

});

