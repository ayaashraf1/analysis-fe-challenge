import { DataInterface } from "../shared/interfaces/DataInterface";

export const getTotalLessonsOfCountry = (countrySchools:DataInterface[]) =>{
    let totalLessons = 0;
    countrySchools.forEach(element=>{
        totalLessons+=element.lessons;
       });
   return totalLessons;
}