import { API } from "./API";

export const getCountriesByRegion = async () => {
  const response = await API.get("region/europe");
  console.log(response);
};
