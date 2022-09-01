import { getSchoolOfspecificLocation } from './getSchoolOfspecificLocation';
import { getTotalLessonsOfEachSchool } from './getTotalLessonsOfEachSchool';

test('get lessons number of each school', () => {
  const schoolsArr = getSchoolOfspecificLocation('Egypt', 'Show All', 'Omaka');
  const totalLessonsOfEachSchool = getTotalLessonsOfEachSchool(schoolsArr);
  expect(totalLessonsOfEachSchool).toHaveLength(4);
  expect(totalLessonsOfEachSchool).toEqual([
    { checked: true, schoolLessonNo: 1045, schoolname: 'Burke High School' },
    { checked: true, schoolLessonNo: 215, schoolname: 'Rapaura School' },
    { checked: true, schoolLessonNo: 530, schoolname: 'Omaka Secondary' },
    { checked: true, schoolLessonNo: 110, schoolname: 'Te Kupenga Preschool' }
  ]);
});

test('get lessons number of school', () => {
  const schoolsArr = getSchoolOfspecificLocation('Egypt', 'Burke High School', 'Omaka');
  const totalLessonsOfEachSchool = getTotalLessonsOfEachSchool(schoolsArr);
  expect(totalLessonsOfEachSchool).toHaveLength(1);
  expect(totalLessonsOfEachSchool).toEqual([
    { checked: true, schoolLessonNo: 1045, schoolname: 'Burke High School' }
  ]);
});
