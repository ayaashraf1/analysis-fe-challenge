import React, { useEffect, useState, useRef } from 'react';
import { TitleComponent } from '@components/titleComponent/TitleComponent';
import { DropDownComponent } from '@components/dropDownComponent/DropDownComponent';
import './AnalysisDashBoard.css';
import { ChartComponent } from '@components/chartComponent/ChartComponent';
import { LessonsComponent } from '@components/lessonsComponent/LessonsComponent';
import { ToggleComponent } from '@components/toggleComponent/ToggleComponent';
import { getAllCamps } from '@services/getAllCamps';
import { getAllCountries } from '@services/getAllCountries';
import { getSchoolOfspecificLocation } from '@services/getSchoolOfspecificLocation';
import { DataInterface } from '@interfaces/DataInterface';
import { groupDataBySchool } from '@services/groupDataBySchool';
import { getLessonsOfSchool } from '@services/getLessonsOfSchool';
import { getRandomColor } from '@methods/getRandomColor';
import { getTotalLessonsOfCountry } from '@services/getTotalLessonsOfCountry';
import { getTotalLessonsOfEachSchool } from '@services/getTotalLessonsOfEachSchool';
import * as setters from '@state/setters';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { RootState } from '@state/reducer';
import { DataSetInterface } from '@interfaces/DataSetInterface';

export const AnalysisDashBoard = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [camps, setCamps] = useState<string[]>([]);
  const [schools, setSchools] = useState<string[]>([]);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const dashBoard = useRef<HTMLDivElement>(null);
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const [datasets, setDataSets] = useState<DataSetInterface[]>([]);
  const [countryObj, setCountryObj] = useState({ countryName: '', countryLessonsNo: 0 });
  const [campObj, setCampObj] = useState({ campName: '', campLessonsNo: 0 });
  const [schoolArr, setSchoolArr] = useState([
    { schoolname: '', schoolLessonNo: 0, checked: true }
  ]);

  const dispatch = useDispatch();
  const { setCurrentCamp, setCurrentCountry, setCurrentSchool, setCurrentDataSets } =
    bindActionCreators(setters, dispatch);
  const state = useSelector((storeData: RootState) => storeData.data);

  const getDropDownCountries = () => {
    const countriesTemp = Array.from(new Set(getAllCountries()));
    setCountries(countriesTemp);
    if (state.currentCountry == '') {
      setCurrentCountry(countriesTemp[0]);
    } else {
      setCurrentCountry(state.currentCountry);
    }
  };
  const getDropDownCamps = () => {
    const campsTemp = Array.from(new Set(getAllCamps()));
    setCamps(campsTemp);
    if (state.currentCamp == '') {
      setCurrentCamp(campsTemp[0]);
    } else {
      setCurrentCamp(state.currentCamp);
    }
  };
  const renderDropDownSchools = (schoolsObj: DataInterface[]) => {
    const schoolsArr: string[] = [];
    schoolsObj.forEach((ele) => {
      schoolsArr.push(ele.school);
    });
    const schoolsArrWithOutDuplicate = Array.from(new Set(schoolsArr));
    schoolsArrWithOutDuplicate.unshift('Show All');
    setSchools(schoolsArrWithOutDuplicate);
    if (state.currentSchool == '') {
      setCurrentSchool(schoolsArrWithOutDuplicate[0]);
    } else {
      setCurrentSchool(state.currentSchool);
    }
  };
  useEffect(() => {
    getDropDownCountries();
    getDropDownCamps();
  }, []);
  const loadChart = (schoolsArr: DataInterface[]) => {
    const dataSetArr: DataSetInterface[] = [];
    const groupedSchool = groupDataBySchool(schoolsArr);
    console.log(groupedSchool);
    for (const [school] of Object.entries(groupedSchool)) {
      const lessonsOfSchool: number[] = getLessonsOfSchool(groupedSchool[school]);
      const randomColor = getRandomColor();
      dataSetArr.push({
        label: school,
        data: lessonsOfSchool,
        borderColor: randomColor,
        backgroundColor: randomColor,
        checked: true
      });
    }
    setDataSets(dataSetArr);
    setCurrentDataSets({
      labels: labels,
      datasets: dataSetArr
    });
  };
  const handleSelectCamp = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentCamp(event.target.value as string);
  };
  const handleSelectCountry = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentCountry(event.target.value as string);
  };
  const handleSelectSchool = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentSchool(event.target.value as string);
  };
  useEffect(() => {
    renderDropDownSchools(
      getSchoolOfspecificLocation(state.currentCountry, 'Show All', state.currentCamp)
    );
    const schoolsInLocation = getSchoolOfspecificLocation(
      state.currentCountry,
      state.currentSchool,
      state.currentCamp
    );
    if (schoolsInLocation.length) {
      loadChart(schoolsInLocation);
    } else {
      setDataSets([]);
    }
    getAndRenderLessonData(schoolsInLocation);
  }, [state.currentCountry, state.currentSchool, state.currentCamp]);

  const getAndRenderLessonData = (schoolsInLocation: DataInterface[]) => {
    const totalLessonOfCountry = getTotalLessonsOfCountry(schoolsInLocation);
    setCountryObj({ countryName: state.currentCountry, countryLessonsNo: totalLessonOfCountry });
    setCampObj({ campName: state.currentCamp, campLessonsNo: totalLessonOfCountry });

    const totalLessonsOfEachSchool = getTotalLessonsOfEachSchool(schoolsInLocation);
    setSchoolArr(totalLessonsOfEachSchool);
  };
  const handleChangeMethod = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };
  useEffect(() => {
    if (dashBoard.current != null) {
      if (darkModeEnabled) {
        dashBoard.current.classList.add('darkMode');
      } else {
        dashBoard.current.classList.remove('darkMode');
      }
    }
  }, [darkModeEnabled]);

  const handleCheckButton = (val: string) => {
    const storedSchools: DataSetInterface[] = state.currentDataSets.datasets;
    const updateChange: DataSetInterface[] = storedSchools.map((ele) => {
      if (ele.label == val) ele.checked = !ele.checked;
      return ele;
    });
    const dataSetWithCheckedSchool = updateChange.filter((ele) => ele.checked);
    setDataSets(dataSetWithCheckedSchool);
  };

  return (
    <div className="dashboard-container" ref={dashBoard}>
      <ToggleComponent
        text={!darkModeEnabled ? 'Dark Mode' : 'Light Mode'}
        toggleChecked={darkModeEnabled}
        handleChangeMethod={handleChangeMethod}
      />
      <TitleComponent
        text="Analsis chart"
        fontSize={25}
        color={!darkModeEnabled ? 'red' : '#35a2eb'}
        fontWeight="bold"
      />
      <br />
      <br />
      <TitleComponent
        text="Number of Lessons"
        fontSize={20}
        color={!darkModeEnabled ? 'red' : '#35a2eb'}
      />
      <br />
      <DropDownComponent
        labelText="Select Country"
        optionsItem={countries}
        handleSelectMethod={handleSelectCountry}
        width="200px"
        height="35px"
        value={state.currentCountry}
      />
      <DropDownComponent
        labelText="Select Camp"
        optionsItem={camps}
        handleSelectMethod={handleSelectCamp}
        width="200px"
        height="35px"
        value={state.currentCamp}
      />
      <DropDownComponent
        labelText="Select School"
        optionsItem={schools}
        handleSelectMethod={handleSelectSchool}
        width="200px"
        height="35px"
        value={state.currentSchool}
      />
      <br /> <br /> <br />
      <div className="chart-section">
        <div className="chart-container">
          {datasets.length ? (
            <ChartComponent labels={labels} datasets={datasets} />
          ) : (
            <div className="poor-screen">No data</div>
          )}
        </div>
        <LessonsComponent
          country={countryObj}
          camp={campObj}
          school={schoolArr}
          onCheckButton={handleCheckButton}
        />
      </div>
    </div>
  );
};
