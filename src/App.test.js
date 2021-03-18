import { render } from '@testing-library/react';
import App from './App';

test('true is true', () => {
  render(<App />);
  expect(true).toEqual(true);
});
