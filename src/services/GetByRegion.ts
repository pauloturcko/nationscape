import { API } from "./API";

export const getByRegion = async () => {
  const response = await API.get("region/europe");
  console.log(response);
  return response;
};
