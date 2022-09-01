import { DataSetInterface } from '@interfaces/DataSetInterface';

export interface ChartInterface {
  labels: string[];
  datasets: DataSetInterface[];
}
