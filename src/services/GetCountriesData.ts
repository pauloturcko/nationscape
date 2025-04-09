import { API } from "./API";

export const getAllData = async () => {
  const response = await API.get("all");
  console.log(response);
};
