import data from '../server/data.json';
import { DataInterface } from '../shared/interfaces/DataInterface';

export const getSchoolOfspecificLocation = (country:string,school:string,camp:string) =>{
    const schoolsTemp:DataInterface[] = [];
    if(school != 'Show All'){
        data.forEach(obj=>{
            if(obj.country==country && obj.camp==camp && obj.school==school){
                schoolsTemp.push(obj);
            }
        });
    }else{
        data.forEach(obj=>{
            if(obj.country==country && obj.camp==camp){
                schoolsTemp.push(obj);
            }
        });
    }
  return schoolsTemp;
}