import { API } from "./API";

export const getByNatives = async () => {
  const response = await API.get("demonym/brazilian");
  return response;
};
