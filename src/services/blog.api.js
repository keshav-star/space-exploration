import api from "./api-config";

export const apiBlogPosts = async () => {
  return api.get("/posts");
};
