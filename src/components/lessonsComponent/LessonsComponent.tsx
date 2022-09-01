import React from 'react';
import { LessonInterface } from '@interfaces/LessonInterface';
import { CheckButtonComponent } from '@components/checkButtonComponent/CheckButtonComponent';
import './LessonComponent.css';

export const LessonsComponent = (props: LessonInterface) => {
  const handleCheckMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onCheckButton(e.target.value);
    props.school.forEach((ele) => {
      if (ele.schoolname == e.target.value) {
        ele.checked = !ele.checked;
      }
    });
  };
  return (
    <div id="lesson-container" data-testid="lesson-component">
      <div className="country-lessons">
        <div>
          <span>{props.country.countryLessonsNo}</span>Lessons
        </div>
        <div>in {props.country.countryName}</div>
      </div>
      <br />
      <div className="camp-lessons">
        <div>
          <span>{props.camp.campLessonsNo}</span>Lessons
        </div>
        <div>in {props.camp.campName}</div>
      </div>
      <br />
      {props.school.map((school, index) => {
        return (
          <CheckButtonComponent
            key={index}
            lessonsNo={school.schoolLessonNo}
            schoolName={school.schoolname}
            handleCheck={handleCheckMethod}
            checked={school.checked}
          />
        );
      })}
    </div>
  );
};
