import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../../components/propos/Services';

test('renders propos services section and at least one service title', () => {
  render(<Services />);

  // There are 2 different nodes containing “Nos services” (badge + potential other matches), so use a plural-safe query.
  expect(screen.getAllByText(/Nos services/i).length).toBeGreaterThan(0);

  expect(screen.getByText(/Transformez vos achats en levier de performance/i)).toBeInTheDocument();

  // At least one of the service titles
  expect(screen.getByText(/Centrale d'Achat/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Voir Tous Nos Services/i })).toBeInTheDocument();
});

