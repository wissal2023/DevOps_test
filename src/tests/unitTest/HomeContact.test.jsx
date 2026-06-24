import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeContact from '../../components/home/Contact';

test('renders home contact section with form fields and submit button', () => {
  window.scrollY = 0;
  window.dispatchEvent(new Event('scroll'));

  render(<HomeContact />);

  expect(
    screen.getByRole('heading', { name: /Contactez - Nous/i })
  ).toBeInTheDocument();

  expect(screen.getByPlaceholderText(/Votre Nom/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Votre Prénom/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Votre Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Votre Message/i)).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /Envoyer Votre Message/i })
  ).toBeInTheDocument();
});

