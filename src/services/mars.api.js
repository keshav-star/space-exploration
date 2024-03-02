import { api2 } from "./api-config";

export const apiMarsUrl = async (url) => {
  return api2.get(url);
};

export const apiApod = async (url) => {
  return api2.get(url);
};
