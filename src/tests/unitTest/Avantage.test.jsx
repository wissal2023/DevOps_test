import React from 'react';
import { render, screen } from '@testing-library/react';
import Avantage from '../../components/home/Avantage';

test('renders avantages section with feature titles', () => {
  render(<Avantage />);

  expect(
    screen.getByRole('heading', {
      name: /Une Vision Tournée Vers La Performance/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Réseau de fournisseurs qualifiés/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Plateforme digitale performante/i)).toBeInTheDocument();
});

