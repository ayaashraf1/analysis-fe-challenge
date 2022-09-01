import { render, screen } from '@testing-library/react';
import { DetailsPage } from './DetailsPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { actionTypes } from '@state/constants';
import RooteState from '@state/reducer/index';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

it('render details page without data', () => {
  const store = configureStore({ reducer: RooteState });
  render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>
  );
  expect(screen.getAllByTestId('Country')[0]).toHaveTextContent('Country:');
  expect(screen.getAllByTestId('Camp')[0]).toHaveTextContent('Camp:');
  expect(screen.getAllByTestId('School')[0]).toHaveTextContent('School:');
  expect(screen.getAllByTestId('Month')[0]).toHaveTextContent('Month:');
  expect(screen.getAllByTestId('Lesson-no')[0]).toHaveTextContent('lessonsNo: 0');
  expect(screen.getAllByTestId('Total-lesson')[0]).toHaveTextContent('Total Lesson: 0');
});
it('render details page with data', async () => {
  const store = configureStore({ reducer: RooteState });
  act(() => {
    store.dispatch({
      type: actionTypes.CURRENT_COUNTRY,
      payload: 'Egypt'
    });
    store.dispatch({
      type: actionTypes.CURRENT_CAMP,
      payload: 'Omaka'
    });
    store.dispatch({
      type: actionTypes.CLICKED_SCHOOL,
      payload: {
        label: 'Burke High School',
        lessonsNo: 250,
        month: 'May'
      }
    });
  });
  render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>
  );

  expect(screen.getByTestId('Country')).toHaveTextContent('Country: Egypt');
  expect(screen.getByTestId('Camp')).toHaveTextContent('Camp: Omaka');
  expect(screen.getByTestId('School')).toHaveTextContent('School: Burke High School');
  expect(screen.getByTestId('Month')).toHaveTextContent('Month: May');
  expect(screen.getByTestId('Lesson-no')).toHaveTextContent('lessonsNo: 250');
  expect(screen.getByTestId('Total-lesson')).toHaveTextContent('Total Lesson: 1045');
});
