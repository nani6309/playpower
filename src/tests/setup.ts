// Vitest test environment setup
import { expect, afterEach } from 'vitest';

// Global cleanup after each test
afterEach(() => {
  document.body.innerHTML = '';
});
