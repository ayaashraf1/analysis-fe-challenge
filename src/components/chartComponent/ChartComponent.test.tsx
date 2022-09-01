import { render } from '@testing-library/react';
import { ChartComponent } from './ChartComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getRandomColor } from '@methods/getRandomColor';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RooteState from '@state/reducer/index';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-canvas-mock';

Enzyme.configure({ adapter: new Adapter() });
const randomColor = getRandomColor();

test('render Chart with data', () => {
  const store = configureStore({ reducer: RooteState });
  // render(
  //   <Provider store={store}>
  //     <Router>
  //       <ChartComponent
  //         labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
  //         datasets={[
  //           {
  //             label: 'school test1',
  //             data: [1000, 200, 400],
  //             borderColor: randomColor,
  //             backgroundColor: randomColor,
  //             checked: true
  //           },
  //           {
  //             label: 'school test2',
  //             data: [1070, 500, 300],
  //             borderColor: randomColor,
  //             backgroundColor: randomColor,
  //             checked: true
  //           }
  //         ]}
  //       />
  //     </Router>
  //   </Provider>
  // );
  // expect(screen.getByTestId('chart-component')).toHaveTextContent('Chartjs');
  // expect(labelText).toBeInTheDocument();
});

//   test('checkButton component calling method on change',  () => {
//     const store = testStore({data:initialState});
//     jest.mock('react-router-dom', () => ({
//         ...jest.requireActual('react-router-dom') as any,
//        useNavigate: () => mockedUsedNavigate,
//      }));
//     const component = shallow(
//         <Provider store={store}>
//         <ChartComponent
//         labels={['Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',]}
//         datasets={[
//           {label:'school test1',
//           data: [1000,200,400],
//           borderColor: randomColor,
//           backgroundColor: randomColor,
//           checked: true},
//           {label:'school test2',
//           data: [1070,500,300],
//           borderColor: randomColor,
//           backgroundColor: randomColor,
//           checked: true}
//         ]}
//         />
//         </Provider>
//     );
//     component.find('canvas').simulate('click', event);
//     expect(mockCallBack).toHaveBeenCalled();
//     expect(mockCallBack).toHaveBeenCalledTimes(1);

//   });
