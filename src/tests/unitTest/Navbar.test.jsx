//src\tests\Navbar.test.jsx
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/common/Navbar";

test("renders navbar", () => {
  render(<Navbar />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});