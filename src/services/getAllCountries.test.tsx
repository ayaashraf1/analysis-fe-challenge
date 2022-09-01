import { getAllCountries } from './getAllCountries';

test('get all camps', () => {
  const allCountries = getAllCountries();
  expect(allCountries).toHaveLength(300);
  expect(Array.from(new Set(allCountries))).toEqual(['Egypt', 'Tunisia', 'Tanzania', 'Kenya']);
});
