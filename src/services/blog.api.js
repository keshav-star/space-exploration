import { api1 } from "./api-config";

export const apiBlogPosts = async () => {
  return api1.get("/posts");
};
export const apiLimitBlogPosts = async (limit) => {
  return api1.get(`/posts/?limit=${limit}`);
};
