import React from 'react';
import { render, screen } from '@testing-library/react';
import Mailing from '../../components/propos/Mailing';

test('renders mailing newsletter input and subscribe button', () => {
  render(<Mailing />);

  expect(screen.getByRole('button', { name: /s'abonner/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
});

