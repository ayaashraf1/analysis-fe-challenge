import { getAllCamps } from './getAllCamps';

test('get all camps', () => {
  const allCamps = getAllCamps();
  expect(allCamps).toHaveLength(300);
  expect(Array.from(new Set(allCamps))).toEqual(['Omaka', 'Kakuma', 'Lemaci', 'Sebuna']);
});
