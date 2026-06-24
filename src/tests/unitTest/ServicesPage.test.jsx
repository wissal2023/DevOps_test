import React from 'react';
import { render, screen } from '@testing-library/react';
import ServicesPage from '../../pages/Services';
import { BrowserRouter } from 'react-router-dom';

test('renders Services page with breadcrumb and catalogue/advantages sections', () => {
  render(
    <BrowserRouter>
      <ServicesPage />
    </BrowserRouter>
  );


  expect(screen.getByRole('heading', { name: /Nos Services/i })).toBeInTheDocument();


  // Catalogue and advantages content
  expect(screen.getByText(/Nos Familles d'Achats/i)).toBeInTheDocument();
  expect(screen.getByText(/Nos Avantages/i)).toBeInTheDocument();
});

