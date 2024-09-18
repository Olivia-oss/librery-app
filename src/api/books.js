import { API } from "./confing";

export const getAllMoviesRequest = async () => {
  try {
    const response = await fetch(API + "/books");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error get movies ", error);
  }
};
