import React from 'react';
import { render, screen } from '@testing-library/react';
import Processus from '../../components/propos/Processus';

test('renders processus steps and main content', () => {
  render(<Processus />);

  expect(screen.getByRole('heading', { name: /Processus De Commande/i })).toBeInTheDocument();
  expect(screen.getByText(/Un Processus Simple, Rapide Et Entièrement Digitalisé/i)).toBeInTheDocument();

  expect(screen.getByText(/Étape 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Création du compte partenaire/i)).toBeInTheDocument();
});

