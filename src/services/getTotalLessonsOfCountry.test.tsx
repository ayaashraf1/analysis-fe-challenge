import { getSchoolOfspecificLocation } from './getSchoolOfspecificLocation';
import { groupDataBySchool } from './groupDataBySchool';
import { getTotalLessonsOfCountry } from './getTotalLessonsOfCountry';

test('get lessons number of school', () => {
  const schoolsArr = getSchoolOfspecificLocation('Egypt', 'Show All', 'Omaka');
  const groupedSchool = groupDataBySchool(schoolsArr);
  const totalLessons = getTotalLessonsOfCountry(groupedSchool['Burke High School']);
  expect(totalLessons).toEqual(1045);
});
