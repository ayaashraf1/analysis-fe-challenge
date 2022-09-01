// country={countryObj}
// camp={campObj}
// school={schoolArr}
// onCheckButton={handleCheckButton}

import { fireEvent, render, screen } from '@testing-library/react';
import { LessonsComponent } from './LessonsComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockCallBack = jest.fn();

Enzyme.configure({ adapter: new Adapter() });

test('render lesson component with default data', () => {
  render(
    <LessonsComponent
      country={{ countryName: 'test country', countryLessonsNo: 5 }}
      camp={{ campName: 'test camp', campLessonsNo: 200 }}
      school={[
        { schoolname: 'school-test1', schoolLessonNo: 225, checked: true },
        { schoolname: 'school-test2', schoolLessonNo: 300, checked: true },
        { schoolname: 'school-test3', schoolLessonNo: 400, checked: true }
      ]}
      onCheckButton={mockCallBack}
    />
  );
  const lessonContainer = screen.getByTestId('lesson-component');
  expect(lessonContainer).toHaveTextContent('5 Lessons');
  expect(lessonContainer).toHaveTextContent('in test country');
  expect(screen.getAllByTestId('input-checkbox')).toHaveLength(3);
});
test('lesson component calling method on check or uncheck one of checkboxs', () => {
  render(
    <LessonsComponent
      country={{ countryName: 'test country', countryLessonsNo: 5 }}
      camp={{ campName: 'test camp', campLessonsNo: 200 }}
      school={[
        { schoolname: 'school-test1', schoolLessonNo: 225, checked: true },
        { schoolname: 'school-test2', schoolLessonNo: 300, checked: true },
        { schoolname: 'school-test3', schoolLessonNo: 400, checked: true }
      ]}
      onCheckButton={mockCallBack}
    />
  );
  const checkButton = screen.getAllByTestId('input-checkbox')[0];
  expect(checkButton).toBeChecked;
  fireEvent.click(checkButton);
  expect(checkButton).not.toBeChecked;
  expect(mockCallBack).toHaveBeenCalled();
  expect(mockCallBack).toHaveBeenCalledTimes(1);
  fireEvent.click(checkButton);
  expect(checkButton).toBeChecked;
  expect(mockCallBack).toHaveBeenCalled();
  expect(mockCallBack).toHaveBeenCalledTimes(2);
});
