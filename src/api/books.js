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

export const getBookByCategory = async (id) => {
  try {
    const response = await fetch(API + "/books/categories/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error get movies ", error);
  }
};

export const getBookSearh = async (searh) => {
  try {
    const response = await fetch(API + "/books/searh/" + searh);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error get movies ", error);
  }
};
