import { API } from "./confing";

export const getAllCategoryRequest = async () => {
  const response = await fetch(API + "/categories");
  const data = await response.json();
  return data;
};
