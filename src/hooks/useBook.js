import { useState, useCallback } from "react";
import {
  getAllMoviesRequest,
  getBookByCategory,
  getBookSearh,
} from "../api/books";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getAll = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllMoviesRequest();

      setBooks(data);
    } catch (error) {
      console.log("error");

      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const searhBookCategory = async (idCategory) => {
    try {
      setLoading(true);
      const data = await getBookByCategory(idCategory);

      setBooks(data);
    } catch (error) {
      console.log("error");

      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const searhBook = async (searh) => {
    try {
      setError(false);
      setLoading(true);
      const data = await getBookSearh(searh);

      setBooks(data);
    } catch (error) {
      console.log("error");

      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    books,
    loading,
    getAllBook: getAll,
    searhBookCategory,
    searhBook,
    error,
  };
};
