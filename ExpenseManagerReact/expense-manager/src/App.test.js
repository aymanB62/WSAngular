import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders learn react link', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
