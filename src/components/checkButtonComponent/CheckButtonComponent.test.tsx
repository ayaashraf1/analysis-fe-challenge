import { fireEvent, render, screen } from '@testing-library/react';
import { CheckButtonComponent } from './CheckButtonComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockCallBack = jest.fn();
const event = {
  target: { value: 'event-value' }
};
Enzyme.configure({ adapter: new Adapter() });

test('checkButton component render right text', () => {
  render(
    <CheckButtonComponent
      lessonsNo={5}
      schoolName="test checkBox component"
      checked={true}
      handleCheck={mockCallBack}
    />
  );
  const labelText = screen.getByTestId('label-checkbox').innerHTML;
  expect(labelText).toBe('5 Lessons');
  const divText = screen.getByTestId('div-checkbox').innerHTML;
  expect(divText).toBe('in test checkBox component');
});

test('checkButton component with default value checked', () => {
  render(
    <CheckButtonComponent
      lessonsNo={5}
      schoolName="test checkBox component"
      checked={true}
      handleCheck={mockCallBack}
    />
  );
  const checkButton = screen.getByTestId('input-checkbox');
  expect(checkButton).toBeChecked;
  fireEvent.click(checkButton);
  expect(checkButton).not.toBeChecked;
});
test('checkButton component with default value unchecked', () => {
  render(
    <CheckButtonComponent
      lessonsNo={5}
      schoolName="test checkBox component"
      checked={false}
      handleCheck={mockCallBack}
    />
  );
  const checkButton = screen.getByTestId('input-checkbox');
  expect(checkButton).not.toBeChecked;
  fireEvent.click(checkButton);
  expect(checkButton).toBeChecked;
});

test('checkButton component calling method on change', () => {
  const component = shallow(
    <CheckButtonComponent
      lessonsNo={5}
      schoolName="test checkBox component"
      checked={false}
      handleCheck={mockCallBack}
    />
  );
  component.find('input').simulate('change', event);
  expect(mockCallBack).toHaveBeenCalled();
  expect(mockCallBack).toHaveBeenCalledTimes(1);
});
