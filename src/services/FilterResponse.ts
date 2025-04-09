import { API } from "./API";

export const filterResponse = async () => {
  const response = await API.get("all?fields=");
  return response;
};
