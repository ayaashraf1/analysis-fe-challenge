import { DataInterface } from "../shared/interfaces/DataInterface";
import { getLessonsOfSchool } from "./getLessonsOfSchool";
import { groupDataBySchool } from "./groupDataBySchool";

const getTotalLessonForSchool = (school:DataInterface[]) =>{
    const lessonArr = getLessonsOfSchool(school);
    const totalLesson = lessonArr.reduce<number>((accumulator, current) => {
        return accumulator + current;
      }, 0);

    return totalLesson;
}
export const getTotalLessonsOfEachSchool = (schools:DataInterface[]) =>{
    const groupedSchool = groupDataBySchool(schools);
    const totalLessonsOfEachSchool = [];

    for (const [school] of Object.entries(groupedSchool)) {
        const lessonsOfSchool:number = getTotalLessonForSchool(groupedSchool[school]);
             totalLessonsOfEachSchool.push({
            'schoolname':school,
            'schoolLessonNo':lessonsOfSchool,
            'checked':true
        });
    }
  return totalLessonsOfEachSchool;
}