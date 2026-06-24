import React from 'react';
import { render, screen } from '@testing-library/react';
import Chiffres from '../../components/home/Chiffres';

test('renders chiffre cles section with stats', () => {
  render(<Chiffres />);

  expect(
    screen.getByRole('heading', { name: /Chiffres Clés/i })
  ).toBeInTheDocument();

  expect(screen.getByText(/-20%/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Réduction Des Coûts D'achat/i)
  ).toBeInTheDocument();
});

