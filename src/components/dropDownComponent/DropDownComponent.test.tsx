import { fireEvent, render, screen } from '@testing-library/react';
import { DropDownComponent } from './DropDownComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

const mockCallBack = jest.fn();
Enzyme.configure({ adapter: new Adapter() });

it('should render dropdown on keyDown', () => {
  render(
    <DropDownComponent
      width="100px"
      height="100px"
      labelText="test dropDown component"
      optionsItem={['test1', 'test2', 'test3']}
      value=""
      handleSelectMethod={mockCallBack}
    />
  );
  const component = screen.getAllByTestId('select-option');
  expect(component).toHaveLength(3);
});
it('checkButton component render right text', () => {
  render(
    <DropDownComponent
      width="100px"
      height="100px"
      labelText="test dropDown component"
      optionsItem={['test1', 'test2', 'test3']}
      value=""
      handleSelectMethod={mockCallBack}
    />
  );
  const labelText = screen.getByTestId('label-dropdown').innerHTML;
  expect(labelText).toBe('test dropDown component');
});
it('checkButton render right style for width and height', () => {
  render(
    <DropDownComponent
      width="100px"
      height="100px"
      labelText="test dropDown component"
      optionsItem={['test1', 'test2', 'test3']}
      value=""
      handleSelectMethod={mockCallBack}
    />
  );
  const dropDownComponent = screen.getByTestId('select-dropdown');
  expect(dropDownComponent).toBeInTheDocument();
  expect(dropDownComponent).toHaveStyle({ width: '100px', height: '100px' });
});
it('checkButton render right options and have value of first option', () => {
  render(
    <DropDownComponent
      width="100px"
      height="100px"
      labelText="test dropDown component"
      optionsItem={['test1', 'test2', 'test3']}
      value="test1"
      handleSelectMethod={mockCallBack}
    />
  );
  const dropDownComponent = screen.getByTestId('select-dropdown');
  expect(dropDownComponent).toBeInTheDocument();
  const dropDownOptions = screen.getAllByTestId('select-option');
  expect(dropDownOptions).toHaveLength(3);
  expect(dropDownComponent).toHaveValue('test1');
});
it('checkButton select option', () => {
  const setcheckValue = jest.fn();
  const useCheckState: any = (useState: any) => [useState, setcheckValue];
  jest.spyOn(React, 'useState').mockImplementation(useCheckState);

  render(
    <DropDownComponent
      width="100px"
      height="100px"
      labelText="test dropDown component"
      optionsItem={['test1', 'test2', 'test3']}
      value={useCheckState()[0]}
      handleSelectMethod={(e) => {
        setcheckValue(e.target.value);
      }}
    />
  );
  const dropDownComponent = screen.getByTestId('select-dropdown');
  expect(dropDownComponent).toBeInTheDocument();
  fireEvent.change(dropDownComponent, {
    target: { value: 'test3' }
  });
  expect(setcheckValue).toHaveBeenCalledTimes(1);
  expect(dropDownComponent).toHaveValue('test3');
});
