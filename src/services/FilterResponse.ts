import { API } from "./API";

export const filterResponse = async () => {
  const response = await API.get("all");
  console.log(response);
  return response;
};
