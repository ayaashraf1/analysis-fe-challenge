import React from 'react';
import './DropDownComponent.css';

interface DropDownIterface{
    width:string
    height:string
    labelText:string
    optionsItem:string[]
    handleSelectMethod:(event:React.ChangeEvent<{ value: unknown }>| null) => void
}

export const DropDownComponent = (props:DropDownIterface) => {
    return (
        <React.Fragment>
              <label>{props.labelText}</label>
                 <select onChange={props.handleSelectMethod} style={{width:props.width,height:props.height}}>
                     {
                         props.optionsItem.map((option,id) =>{
                             return <option value={option} key={id}>{option}</option>
                         })
                     }
                </select>
        </React.Fragment>
    );
}
