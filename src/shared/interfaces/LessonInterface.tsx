export interface LessonInterface{
    country:{
        countryName:string,
        countryLessonsNo:number
    }
    camp:{
        campName:string,
        campLessonsNo:number
    }
    school:{
        schoolname:string,
        schoolLessonNo:number,
        checked:boolean
    }[]
    onCheckButton:(event:string| null) => void
}