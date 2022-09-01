import { getSchoolOfspecificLocation } from './getSchoolOfspecificLocation';
import { groupDataBySchool } from './groupDataBySchool';

test('grouped data by schools (in case show all)', () => {
  const schoolsArr = getSchoolOfspecificLocation('Egypt', 'Show All', 'Omaka');
  const groupedSchool = groupDataBySchool(schoolsArr);
  expect(groupedSchool['Burke High School']).toHaveLength(8);
});
test('grouped data by school (in case send specific school)', () => {
  const schoolsArr = getSchoolOfspecificLocation('Egypt', 'Burke High School', 'Omaka');
  const groupedSchool = groupDataBySchool(schoolsArr);
  expect(groupedSchool['Burke High School']).toHaveLength(8);
});
