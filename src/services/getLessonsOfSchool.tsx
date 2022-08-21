import { DataInterface } from "../shared/interfaces/DataInterface"

export const getLessonsOfSchool = (schools:DataInterface[]) =>{
     const lessons:number[]=[];
     schools.forEach(school=>{
           lessons.push(school["lessons"]);
        });
    return lessons;
}