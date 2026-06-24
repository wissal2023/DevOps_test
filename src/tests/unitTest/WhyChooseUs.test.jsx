import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyChooseUs from '../../components/home/WhyChooseUs';

test('renders why choose us section and main CTA', () => {
  render(<WhyChooseUs />);

  expect(
    screen.getByRole('heading', {
      name: /Pourquoi Choisir/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /Voir Tous Nos Services/i })
  ).toBeInTheDocument();
});

