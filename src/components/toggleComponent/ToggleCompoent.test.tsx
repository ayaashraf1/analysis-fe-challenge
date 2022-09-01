import { fireEvent, render, screen } from '@testing-library/react';
import { ToggleComponent } from './ToggleComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockCallBack = jest.fn();
const event = {
  target: { value: 'event-value' }
};
Enzyme.configure({ adapter: new Adapter() });

test('Toggle component render right text', () => {
  render(
    <ToggleComponent
      text="test toggle component"
      toggleChecked={true}
      handleChangeMethod={mockCallBack}
    />
  );
  const toggle = screen.getByText('test toggle component');
  expect(toggle).toHaveTextContent('test toggle component');
});

test('Toggle component with default value checked', () => {
  render(
    <ToggleComponent
      text="test toggle component"
      toggleChecked={true}
      handleChangeMethod={mockCallBack}
    />
  );
  const toggle = screen.getByTestId('input-toggle');
  expect(toggle).toBeChecked;
  fireEvent.click(toggle);
  expect(toggle).not.toBeChecked;
});
test('Toggle component with default value unchecked', () => {
  render(
    <ToggleComponent
      text="test toggle component"
      toggleChecked={false}
      handleChangeMethod={mockCallBack}
    />
  );
  const toggle = screen.getByTestId('input-toggle');
  expect(toggle).not.toBeChecked;
  fireEvent.click(toggle);
  expect(toggle).toBeChecked;
});
test('Toggle component calling method on change', () => {
  const component = shallow(
    <ToggleComponent
      text="test toggle component"
      toggleChecked={false}
      handleChangeMethod={mockCallBack}
    />
  );
  component.find('input').simulate('change', event);
  expect(mockCallBack).toHaveBeenCalled();
  expect(mockCallBack).toHaveBeenCalledTimes(1);
});
