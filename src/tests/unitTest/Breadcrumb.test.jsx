import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../../components/propos/Breadcrumb';
import { BrowserRouter } from 'react-router-dom';

test('renders breadcrumb title and text', () => {
  render(
    <BrowserRouter>
      <Breadcrumb title="Titre" breadcrumb="Texte" />
    </BrowserRouter>
  );

  expect(screen.getByRole('heading', { name: /Titre/i })).toBeInTheDocument();
  expect(screen.getByText('Texte')).toBeInTheDocument();
});

