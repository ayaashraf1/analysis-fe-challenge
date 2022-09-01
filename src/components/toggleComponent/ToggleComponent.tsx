import React from 'react';
import './ToggleComponent.css';

interface ToggleInterface {
  text: string;
  toggleChecked: boolean;
  handleChangeMethod: (event: React.ChangeEvent<HTMLInputElement> | null) => void;
}

export const ToggleComponent = (props: ToggleInterface) => {
  return (
    <div className="toggleContainer">
      {props.text}
      <label className="switch">
        <input
          type="checkbox"
          role="checkbox"
          checked={props.toggleChecked}
          onChange={props.handleChangeMethod}
          data-testid="input-toggle"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
