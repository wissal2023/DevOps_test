import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../../components/home/Services';

test('renders services section with services list and CTA', () => {
  render(<Services />);

  // Section CTA
  expect(
    screen.getByRole('button', { name: /Voir Tous Nos Services/i })
  ).toBeInTheDocument();

  // At least one service card title
  expect(
    screen.getByRole('heading', { name: /Centrale d'Achat/i })
  ).toBeInTheDocument();
});

