import { API } from "./API";

type NameEndpointProps = {
  name: string;
};

export const getByName = async ({ name }: NameEndpointProps) => {
  const response = await API.get(`name/${name}`);
  return response;
};
