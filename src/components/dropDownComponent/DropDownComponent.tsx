import React from 'react';
import './DropDownComponent.css';

interface DropDownIterface {
  width: string;
  height: string;
  labelText: string;
  optionsItem: string[];
  handleSelectMethod: (event: React.ChangeEvent<{ value: unknown }> | null) => void;
  value: string;
}

export const DropDownComponent = (props: DropDownIterface) => {
  return (
    <React.Fragment>
      <label data-testid="label-dropdown">{props.labelText}</label>
      <select
        onChange={props.handleSelectMethod}
        style={{ width: props.width, height: props.height }}
        value={props.value}
        data-testid="select-dropdown"
      >
        {props.optionsItem.map((option, id) => {
          return (
            <option value={option} key={id} data-testid="select-option">
              {option}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};
