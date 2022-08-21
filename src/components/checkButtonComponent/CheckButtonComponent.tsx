import React from 'react';
import './CheckButtonComponent.css';

interface CheckButtonInterface{
    lessonsNo:number,
    schoolName:string,
    handleCheck:(event: React.ChangeEvent<HTMLInputElement>| null) => void,
    checked:boolean
}
export const CheckButtonComponent = (props:CheckButtonInterface) =>{
    return (
        <div className="checkButton-container">
            <div >
                <input type="checkbox" id={props.schoolName} value={props.schoolName} className="checkInput" 
                onChange={props.handleCheck} checked={props.checked} />
                 <label>{props.lessonsNo} Lessons</label>
            </div>
             <div className="schoolName">in {props.schoolName}</div>
        </div>
    );
}
