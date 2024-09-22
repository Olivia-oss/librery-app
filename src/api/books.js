import { API } from "./confing";

export const getAllMoviesRequest = async () => {
  const response = await fetch(API + "/books");
  const data = await response.json();
  return data;
};

export const getBookByCategory = async (id) => {
  const response = await fetch(API + "/books/categories/" + id);
  const data = await response.json();
  return data;
};

export const getBookSearh = async (searh) => {
  const response = await fetch(API + "/books/searh/" + searh);
  const data = await response.json();
  return data;
};
