import data from '../server/data.json';

export const getAllSchools=()=>{
    const schoolsTemp:string[] = [];
    data.forEach(obj=>{schoolsTemp.push(obj.school);});

   return schoolsTemp;
  }