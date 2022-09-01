import { getLessonsOfSchool } from './getLessonsOfSchool';
import { getSchoolOfspecificLocation } from './getSchoolOfspecificLocation';
import { groupDataBySchool } from './groupDataBySchool';

test('get lessons number of school', () => {
  const schoolsArr = getSchoolOfspecificLocation('Egypt', 'Show All', 'Omaka');
  const groupedSchool = groupDataBySchool(schoolsArr);
  const lessons = getLessonsOfSchool(groupedSchool['Burke High School']);
  expect(lessons).toHaveLength(8);
});
