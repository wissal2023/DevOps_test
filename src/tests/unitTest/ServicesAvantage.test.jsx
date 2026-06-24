import React from 'react';
import { render, screen } from '@testing-library/react';
import Avantage from '../../components/services/Avantage';

test('renders services/Avantage catalogue feature cards', () => {
  render(<Avantage />);

  // Heading role is <h2> for Avantage? In this component, the visible heading is a paragraph-like h2.
  // Instead of exact role, verify the key text exists.
  expect(screen.getByText(/Une Vision Tournée Vers La Performance/i)).toBeInTheDocument();

  // verify at least one feature title is present
  expect(screen.getByText(/Réseau de fournisseurs qualifiés/i)).toBeInTheDocument();

});

