import { axios_client } from "./axios_client";

export const getAllClasses = async () => {
  const response = await axios_client.get("/v1/classes");
  return response.data;
};
