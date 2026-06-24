import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "../../components/contact/ContactForm";

test("renders contact form section and key inputs", () => {
  window.scrollY = 0;
  window.dispatchEvent(new Event("scroll"));

  render(<ContactForm />);

  expect(
    screen.getByRole("heading", { name: /contactez-nous/i })
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/votre nom/i)
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/votre prénom/i)
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/votre adresse email/i)
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/votre message/i)
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /envoyer votre message/i })
  ).toBeInTheDocument();
});

