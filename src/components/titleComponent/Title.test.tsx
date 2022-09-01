import { render, screen } from '@testing-library/react';
import { TitleComponent } from './TitleComponent';

test('render title component with diferent parameteres', () => {
  render(<TitleComponent text="test title compoent" fontSize={16} color="red" fontWeight="bold" />);
  const Title = screen.getByText('test title compoent');
  expect(Title).toHaveStyle({ fontWeight: 'bold', color: 'red', fontSize: '16px' });
});

test('render title component with right text', () => {
  render(<TitleComponent text="test title compoent" fontSize={16} color="red" fontWeight="bold" />);

  const title = screen.getByTestId('title-component').innerHTML;
  expect(title).toBe('test title compoent');
});

test('render title component without color', () => {
  render(<TitleComponent text="test title compoent" fontSize={16} color="" fontWeight="bold" />);
  const Title = screen.getByText('test title compoent');
  expect(Title).toHaveStyle({ fontWeight: 'bold', color: 'black', fontSize: '16px' });
});

test('render title component without fontWeight', () => {
  render(<TitleComponent text="test title compoent" fontSize={16} color="blue" fontWeight="" />);
  const Title = screen.getByText('test title compoent');
  expect(Title).toHaveStyle({ fontWeight: 'normal', color: 'blue', fontSize: '16px' });
});

test('render title component without fontWeight and color', () => {
  render(<TitleComponent text="test title compoent" fontSize={16} color="" fontWeight="" />);
  const Title = screen.getByText('test title compoent');
  expect(Title).toHaveStyle({ fontWeight: 'normal', color: 'black', fontSize: '16px' });
});
