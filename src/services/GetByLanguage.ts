import { API } from "./API";

export const getByLanguage = async () => {
  const response = await API.get("/lang/spanish");
  return response;
};
