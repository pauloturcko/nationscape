import { API } from "./API";

type RegionEndpointProps = {
  region: string;
};

export const getByRegion = async ({ region }: RegionEndpointProps) => {
  const response = await API.get(`region/${region}`);
  console.log(response);
  return response;
};
