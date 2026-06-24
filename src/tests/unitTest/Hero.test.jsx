import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/home/Hero';

test('renders hero section with title and CTAs', () => {
  render(<Hero />);

  expect(screen.getByRole('heading', { name: /Votre Centrale D'Achat/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Demander Un Devis/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Accès Partenaire/i })).toBeInTheDocument();
});

