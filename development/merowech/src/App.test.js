import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Udo Schlegel resume page', () => {
  render(<App />);
  expect(screen.getByText(/Senior Applied Scientist/i)).toBeInTheDocument();
});
