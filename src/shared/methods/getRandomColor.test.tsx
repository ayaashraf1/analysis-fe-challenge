import { getRandomColor } from './getRandomColor';

test('test get random color method', () => {
  const randomColor = getRandomColor();
  expect(randomColor).toContain('#');
  expect(randomColor.length).toBe(7);
  expect(randomColor).toMatch(/^#[0-9a-f]{6}$/i);
});
