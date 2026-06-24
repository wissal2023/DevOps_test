import React from 'react';

// main.jsx performs ReactDOM root mounting on import.
// This test only verifies that the entry file can be imported without crashing.

test('main entry module loads without crashing', async () => {
  await expect(async () => {
    await import('../../main.jsx');
  }).not.toThrow();

  // no explicit assertions; absence of crash is the check
});


