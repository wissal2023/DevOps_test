import { render, screen } from "@testing-library/react";
import Footer from "../../components/common/Footer";

test("renders footer and newsletter form", () => {
  window.scrollY = 0;
  window.dispatchEvent(new Event("scroll"));
  render(<Footer />);


  // motion.footer still renders a <footer> element
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();

  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /s'abonner/i })
  ).toBeInTheDocument();
});

