import { API } from "./API";

export const getByCapitalCity = async () => {
  const response = await API.get("capital/tokyo");
  console.log(response);
  return response;
};
