import { axios_client } from "./axios_client";

export const getAllStudents = async () => {
  const response = await axios_client.get("/v1/students");
  return response.data;
};
