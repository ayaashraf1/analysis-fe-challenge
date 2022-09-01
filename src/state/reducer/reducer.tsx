import { actionTypes } from '@state/constants';
import { Action } from '@state/action';
import { ChartInterface } from '@interfaces/ChartInterface';

const initialState = {
  currentSchool: '',
  currentCamp: '',
  currentCountry: '',
  clickedSchool: {
    label: '',
    lessonsNo: 0,
    month: ''
  },
  currentDataSets: {
    labels: [''],
    datasets: [
      {
        label: '',
        data: [0],
        borderColor: '',
        backgroundColor: '',
        checked: true
      }
    ]
  }
};
type intialStateType = {
  currentSchool: string;
  currentCamp: string;
  currentCountry: string;
  clickedSchool: {
    label: string;
    lessonsNo: number;
    month: string;
  };
  currentDataSets: ChartInterface;
};

export const reducer = (state: intialStateType = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.CURRENT_SCHOOL: {
      return {
        ...state,
        currentSchool: action.payload
      };
    }
    case actionTypes.CURRENT_CAMP: {
      return {
        ...state,
        currentCamp: action.payload
      };
    }
    case actionTypes.CURRENT_COUNTRY: {
      return {
        ...state,
        currentCountry: action.payload
      };
    }
    case actionTypes.CLICKED_SCHOOL: {
      return {
        ...state,
        clickedSchool: action.payload
      };
    }
    case actionTypes.CURRENT_DATA_SETS: {
      return {
        ...state,
        currentDataSets: action.payload
      };
    }
    default:
      return state;
  }
};
