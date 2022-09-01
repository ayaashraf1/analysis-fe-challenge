import { ChartInterface } from '@interfaces/ChartInterface';
import { DataInterface } from '@interfaces/DataInterface';
import { actionTypes } from '@state/constants';

interface DropDownData {
  type: actionTypes.CURRENT_CAMP | actionTypes.CURRENT_SCHOOL | actionTypes.CURRENT_COUNTRY;
  payload: string;
}

interface CurrentSchools {
  type: actionTypes.CURRENT_SCHOOLS;
  payload: DataInterface[];
}

interface ChartData {
  type: actionTypes.CURRENT_DATA_SETS;
  payload: ChartInterface;
}
interface ClickedSchoolData {
  type: actionTypes.CLICKED_SCHOOL;
  payload: {
    label: string;
    lessonsNo: number;
    month: string;
  };
}

export type Action = DropDownData | CurrentSchools | ChartData | ClickedSchoolData;
