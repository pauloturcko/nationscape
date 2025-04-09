import { API } from "./API";

export const getByName = async () => {
  const response = await API.get("name/brazil");
  return response;
};
