import { getSchoolOfspecificLocation } from './getSchoolOfspecificLocation';

test('get schools data of specific country ,camp and school', () => {
  const schools = getSchoolOfspecificLocation('Egypt', 'Burke High School', 'Omaka');
  expect(schools).toHaveLength(8);
  expect(schools[0]).toEqual({
    camp: 'Omaka',
    country: 'Egypt',
    id: '620af3a468e4b2e765e7c9e7',
    lessons: 140,
    month: 'Feb',
    school: 'Burke High School'
  });
});
test('get All schools data of specific country and camp', () => {
  const schools = getSchoolOfspecificLocation('Egypt', 'Show All', 'Omaka');
  expect(schools).toHaveLength(16);
  expect(schools[0]).toEqual({
    camp: 'Omaka',
    country: 'Egypt',
    id: '620af3a468e4b2e765e7c9e7',
    lessons: 140,
    month: 'Feb',
    school: 'Burke High School'
  });
});
