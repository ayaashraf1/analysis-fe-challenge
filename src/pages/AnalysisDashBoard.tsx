import React , { useEffect , useState , useRef } from 'react';
import { TitleComponent } from '../components/titleComponent/TitleComponent';
import { DropDownComponent } from '../components/dropDownComponent/DropDownComponent';
import './AnalysisDashBoard.css';
import { ChartComponent } from '../components/chartComponent/ChartComponent';
import { LessonsComponent } from '../components/lessonsComponent/LessonsComponent';
import { ToggleComponent } from '../components/toggleComponent/ToggleComponent';
import {getAllCamps} from '../services/getAllCamps';
import {getAllSchools} from '../services/getAllSchools';
import {getAllCountries} from '../services/getAllCountries';
import { getSchoolOfspecificLocation } from '../services/getSchoolOfspecificLocation';
import { DataInterface } from '../shared/interfaces/DataInterface';
import { groupDataBySchool } from '../services/groupDataBySchool';
import { getLessonsOfSchool } from '../services/getLessonsOfSchool';
import { getRandomColor } from '../shared/methods/getRandomColor';
import { getTotalLessonsOfCountry } from '../services/getTotalLessonsOfCountry';
import { getTotalLessonsOfEachSchool } from '../services/getTotalLessonsOfEachSchool';

interface DataSetInterface{
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
    checked:boolean
}

export const AnalyticsDashBoard = () =>{
    const [countries,setCountries] =  useState<string[]>([]);
    const [camps,setCamps] =  useState<string[]>([]);
    const [schools,setSchools] =  useState<string[]>([]);
    const [darkModeEnabled,setDarkModeEnabled] = useState(false);
    const dashBoard =  useRef<HTMLDivElement>(null);
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
    const [datasets,setDataSets] = useState<DataSetInterface[]>([]);
    
    const [selectedCountry,setSelectedCountry] = useState('');
    const [selectedCamp,setSelectedCamp] = useState('');
    const [selectedSchool,setSelectedSchool] = useState('');

    const [countryObj,setCountryObj] = useState({'countryName':'','countryLessonsNo':0});
    const [campObj,setCampObj] = useState({'campName':'','campLessonsNo':0});
    const [schoolArr,setSchoolArr] = useState([{'schoolname':'','schoolLessonNo':0,'checked':true}]);



    const getDropDownCountries=()=>{
        const countriesTemp = Array.from(new Set(getAllCountries()));
        setCountries(countriesTemp);
        setSelectedCountry(countriesTemp[0]);
      }
      const getDropDownCamps=()=>{
        const campsTemp = Array.from(new Set(getAllCamps()));
        setCamps(campsTemp);
        setSelectedCamp(campsTemp[0]);
      }
      const getDropDownSchools=()=>{
        const schoolsTemp = Array.from(new Set(getAllSchools()));
        schoolsTemp.unshift('Show All');
        setSchools(schoolsTemp);
        setSelectedSchool(schoolsTemp[0]);
      }
      useEffect(()=>{
        getDropDownCountries();
        getDropDownCamps();
        getDropDownSchools();
      },[]);
const loadChart = (schoolsArr:DataInterface[]) =>{
    const dataSetArr:DataSetInterface[]=[];
    const groupedSchool = groupDataBySchool(schoolsArr);
    for (const [school] of Object.entries(groupedSchool)) {
        const lessonsOfSchool:number[] = getLessonsOfSchool(groupedSchool[school]);
        const randomColor = getRandomColor();
        dataSetArr.push({
             'label':school,
             'data':lessonsOfSchool,
             'borderColor': randomColor,
             'backgroundColor': randomColor,
             'checked':true
         });
      }
    localStorage.setItem('dataSet',JSON.stringify(dataSetArr));
    setDataSets(dataSetArr);
}
const handleSelectCamp = (event:React.ChangeEvent<{ value: unknown }>) =>{
  setSelectedCamp(event.target.value as string);
}
const handleSelectCountry = (event:React.ChangeEvent<{ value: unknown }>) =>{
  setSelectedCountry(event.target.value as string);
}
const handleSelectSchool = (event:React.ChangeEvent<{ value: unknown }>) =>{
     setSelectedSchool(event.target.value as string);
}
useEffect(()=>{
  const schoolsInLocation = getSchoolOfspecificLocation(selectedCountry,selectedSchool,selectedCamp);
  if(schoolsInLocation.length){
      loadChart(schoolsInLocation);
  }else{
    setDataSets([]);
  }
  const totalLessonOfCountry = getTotalLessonsOfCountry(schoolsInLocation);
  setCountryObj({'countryName':selectedCountry,'countryLessonsNo':totalLessonOfCountry});
  setCampObj({'campName':selectedCamp,'campLessonsNo':totalLessonOfCountry});

  const totalLessonsOfEachSchool = getTotalLessonsOfEachSchool(schoolsInLocation);
  setSchoolArr(totalLessonsOfEachSchool);

},[selectedCountry,selectedSchool,selectedCamp]);
const handleChangeMethod = ()=>{
    setDarkModeEnabled(!darkModeEnabled);
}
useEffect(()=>{
    if(dashBoard.current !=null){
        if(darkModeEnabled){
            dashBoard.current.classList.add("darkMode");
        }else{
            dashBoard.current.classList.remove("darkMode");
        }
    }
 },[darkModeEnabled]);

 const handleCheckButton = (val:string) =>{
  const storedSchools:DataSetInterface[] = JSON.parse(localStorage.getItem('dataSet')); 
  const updateChange:DataSetInterface[] = storedSchools.map(ele=>{
    if(ele.label==val) ele.checked =!ele.checked;
    return ele;
  });
  localStorage.setItem('dataSet',JSON.stringify(updateChange));
  const dataSetWithCheckedSchool = updateChange.filter(ele=> ele.checked);
  setDataSets(dataSetWithCheckedSchool);
 }

    return (
        <div className="dashboard-container" ref={dashBoard}>
        <ToggleComponent text={!darkModeEnabled?"Dark Mode":"Light Mode"} toggleChecked={darkModeEnabled} handleChangeMethod={handleChangeMethod} />
        <TitleComponent text='Analsis chart'fontSize={25} color={!darkModeEnabled?"red":"#35a2eb"} fontWeight="bold" /><br/><br/>
        <TitleComponent text='Number of Lessons'fontSize={20} color={!darkModeEnabled?"red":"#35a2eb"}  /><br/>
        <DropDownComponent labelText="Select Country" optionsItem={countries} handleSelectMethod={handleSelectCountry}
        width='200px' height='35px' />
          <DropDownComponent labelText="Select Camp" optionsItem={camps} handleSelectMethod={handleSelectCamp}
        width='200px' height='35px' /> 
         <DropDownComponent labelText="Select School" optionsItem={schools} handleSelectMethod={handleSelectSchool}
        width='200px' height='35px' />
        <br/>  <br/>  <br/>
         <div className="chart-section">
        <div className="chart-container">
        {datasets.length ? <ChartComponent labels={labels} datasets={datasets} /> : 
        <div className="poor-screen">No data</div>}
        </div>
        <LessonsComponent country={countryObj} camp={campObj} school={schoolArr} onCheckButton={handleCheckButton} />
         </div>
        </div>
    )
}
