import data from '../server/data.json';

export const getAllCountries = () => {
  const countriesTemp: string[] = [];
  data.forEach((obj) => {
    countriesTemp.push(obj.country);
  });

  return countriesTemp;
};
