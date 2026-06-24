import { render, screen } from "@testing-library/react";
import Header from "../../components/common/Header";

test("renders header navigation", () => {
  // prevent potential scroll-dependent effects from using undefined values
  window.scrollY = 0;
  window.dispatchEvent(new Event("scroll"));

  render(<Header />);

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByAltText("Global Leaders Trade Logo")).toBeInTheDocument();
});

