import { useState, useCallback } from "react";
import { getAllMoviesRequest } from "../api/books";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAll = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllMoviesRequest();

      setBooks(data);
    } catch (error) {
      throw "Error loading book " + error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { books, loading, gellAllBook: getAll };
};
