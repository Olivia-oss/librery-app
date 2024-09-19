import { API } from "./confing";

export const getAllCategoryRequest = async () => {
  try {
    const response = await fetch(API + "/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error get categories ", error);
  }
};
