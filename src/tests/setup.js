//src\tests\setup.js
import "@testing-library/jest-dom";

// framer-motion uses IntersectionObserver for viewport animations.
// Provide a minimal mock for JSDOM-based tests.
if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

// react-router-dom <Link> requires Router context.
// Keep it safe: do nothing here; individual tests can wrap with a Router.

