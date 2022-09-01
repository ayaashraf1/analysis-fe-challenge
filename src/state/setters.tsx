import { ChartInterface } from '@interfaces/ChartInterface';
import { Dispatch } from 'redux';
import { Action } from './action';
import { actionTypes } from './constants';

export const setCurrentCountry = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.CURRENT_COUNTRY,
      payload: amount
    });
  };
};
export const setCurrentCamp = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.CURRENT_CAMP,
      payload: amount
    });
  };
};
export const setCurrentSchool = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.CURRENT_SCHOOL,
      payload: amount
    });
  };
};
export const setClickedSchool = (amount: { label: string; lessonsNo: number; month: string }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.CLICKED_SCHOOL,
      payload: amount
    });
  };
};
export const setCurrentDataSets = (amount: ChartInterface) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.CURRENT_DATA_SETS,
      payload: amount
    });
  };
};
