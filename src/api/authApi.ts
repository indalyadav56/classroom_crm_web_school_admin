import { axios_client } from "./axios_client";

export const schoolLogin = async () => {
  const response = await axios_client.get("/v1/auth/login");
  return response.data;
};
