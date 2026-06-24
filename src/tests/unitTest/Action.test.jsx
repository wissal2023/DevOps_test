import React from 'react';
import { render, screen } from '@testing-library/react';
import Action from '../../components/home/Action';

test('renders newsletter action banner with 2 CTAs', () => {
  render(<Action />);

  expect(
    screen.getByRole('heading', {
      name: /Rejoignez Le Réseau D'approvisionnement Du Groupe Leaders/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /Demander Un Devis/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Devenir Partenaire/i })
  ).toBeInTheDocument();
});

