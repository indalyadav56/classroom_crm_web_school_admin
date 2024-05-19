import { axios_client } from "./axios_client";

export const getAllParents = async () => {
  const response = await axios_client.get("/v1/parents");
  return response.data;
};
