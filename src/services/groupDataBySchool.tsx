import { DataInterface } from '../shared/interfaces/DataInterface';

export const groupDataBySchool = (Arr: DataInterface[]) => {
  const result = Arr.reduce(function (r, a) {
    r[a.school] = r[a.school] || [];
    r[a.school].push(a);
    return r;
  }, Object.create(null));

  return result;
};
