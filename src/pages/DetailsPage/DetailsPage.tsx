import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@state/reducer/index';
import { getSchoolOfspecificLocation } from '@services/getSchoolOfspecificLocation';
import { getTotalLessonsOfCountry } from '@services/getTotalLessonsOfCountry';
import './DetailsPage.css';

export const DetailsPage = () => {
  const state = useSelector((storeData: RootState) => storeData.data);
  const [totalLesson, setTotalLesson] = useState(0);

  useEffect(() => {
    const schoolsInLocation = getSchoolOfspecificLocation(
      state.currentCountry,
      state.clickedSchool.label,
      state.currentCamp
    );
    setTotalLesson(getTotalLessonsOfCountry(schoolsInLocation));
  }, []);

  return (
    <div id="details-container" data-testid="details-page">
      <div data-testid="Country">
        <span>Country:</span> {state.currentCountry}{' '}
      </div>
      <div data-testid="Camp">
        <span>Camp: </span>
        {state.currentCamp}
      </div>
      <div data-testid="School">
        <span>School: </span>
        {state.clickedSchool.label}{' '}
      </div>
      <div data-testid="Month">
        <span>Month: </span>
        {state.clickedSchool.month}{' '}
      </div>
      <div data-testid="Lesson-no">
        <span>lessonsNo: </span>
        {state.clickedSchool.lessonsNo}{' '}
      </div>
      <div data-testid="Total-lesson">
        <span>Total Lesson: </span>
        {totalLesson}
      </div>
    </div>
  );
};
