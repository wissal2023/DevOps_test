import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App.jsx';


test('App renders toast container and navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // ToastContainer renders a div with role="region" in react-toastify.
  // Keep flexible by checking it exists via common testid-less selector.
  expect(document.querySelector('.Toastify')).toBeInTheDocument();

  // Navigation comes from routes (Navbar inside HomePage)
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

