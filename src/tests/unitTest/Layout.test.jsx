import { render, screen } from "@testing-library/react";
import Layout from "../../components/common/Layout";
import { BrowserRouter } from "react-router-dom";

test("renders layout with header, children, and footer", () => {
  render(
    <BrowserRouter>
      <Layout>
        <div>Layout children content</div>
      </Layout>
    </BrowserRouter>
  );

  expect(screen.getAllByRole("navigation").length).toBeGreaterThan(0);
  expect(screen.getByText("Layout children content")).toBeInTheDocument();

  // footer should exist
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});

test("renders breadcrumb when enabled", () => {
  render(
    <BrowserRouter>
      <Layout showBreadcrumb breadcrumbTitle="Titre" breadcrumbText="Texte" />
    </BrowserRouter>
  );

  // Breadcrumb component should display the title/text (use flexible queries)
  expect(screen.getByText("Titre")).toBeInTheDocument();
  expect(screen.getByText("Texte")).toBeInTheDocument();
});

