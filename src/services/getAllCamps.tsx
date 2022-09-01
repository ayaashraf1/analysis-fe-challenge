import data from '../server/data.json';

export const getAllCamps = () => {
  const campsTemp: string[] = [];
  data.forEach((obj) => {
    campsTemp.push(obj.camp);
  });
  return campsTemp;
};
