import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '../../components/home/AboutSection';

test('renders about section content and CTA', () => {
  render(<AboutSection />);

  expect(
    screen.getByRole('heading', {
      name: /Votre Partenaire Stratégique/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /À Propos De Nous/i })).toBeInTheDocument();
});

