import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

test('render not found page', () => {
  render(<NotFoundPage />);

  const pageNotFound = screen.getByTestId('page-not-found');
  expect(pageNotFound).toHaveTextContent('This Page Not Found');
});
