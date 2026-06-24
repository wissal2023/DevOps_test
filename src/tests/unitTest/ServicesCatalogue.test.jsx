import React from 'react';
import { render, screen } from '@testing-library/react';
import Catalogue from '../../components/services/Catalogue';

test('renders services/Catalogue section with catalogue titles', () => {
  render(<Catalogue />);

  expect(
    screen.getByRole('heading', { name: /Nos Familles d'Achats/i })
  ).toBeInTheDocument();

  expect(screen.getByText(/BTP/i)).toBeInTheDocument();
  // “Ciment” appears both as a title and inside its description, so use plural-safe query.
  expect(screen.getAllByText(/Ciment/i).length).toBeGreaterThan(0);

});

