import { useCallback, useState } from "react";
import { getAllCategoryRequest } from "../api/category";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAll = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllCategoryRequest();

      setCategories(data);
    } catch (error) {
      throw "Error loading book " + error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { categories, loading, getAllCategories: getAll };
};
