import React from 'react';
import { render, screen } from '@testing-library/react';
import Propos from '../../pages/Propos';
import { BrowserRouter } from 'react-router-dom';

test('renders Propos page with breadcrumb and main content', () => {
  render(
    <BrowserRouter>
      <Propos />
    </BrowserRouter>
  );


  // Breadcrumb title comes from Layout->Breadcrumb
  expect(screen.getByRole('heading', { name: /À Propos De Nous/i })).toBeInTheDocument();


  // Sections inside should render known text
  expect(screen.getByText(/Processus De Commande/i)).toBeInTheDocument();
});

