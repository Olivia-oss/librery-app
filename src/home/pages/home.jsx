import { useEffect, useState } from "react";
import { Search } from "../components/search";
import "../styles/home.css";
import { useCategories } from "../../hooks/useCategories";
import { Category } from "../components/category";
import { useBooks } from "../../hooks/useBook";
import { Book } from "../components/books";
import Error from "../components/error";
import NotResult from "../components/notResult";

export const Home = () => {
  const { getAllCategories, categories } = useCategories();
  const { books, getAllBook, loading, searhBookCategory, searhBook, error } =
    useBooks();
  const [idSelectBook, setIdSelectBook] = useState(-1);
  const [idSelectCategory, setIdSelectCategory] = useState(-1);

  useEffect(() => {
    getAllCategories();
    getAllBook();
  }, [getAllCategories, getAllBook]);

  const handleBookSelect = (id) => {
    if (id == idSelectBook) {
      setIdSelectBook(-1);
    } else {
      setIdSelectBook(id);
    }
  };

  const handleCategorySelect = (id) => {
    if (id == idSelectCategory) {
      setIdSelectCategory(-1);
      getAllBook();
    } else {
      setIdSelectCategory(id);
      searhBookCategory(id);
    }
  };

  return (
    <div className="ct-home">
      <Search searhBook={searhBook} />

      <div className="ct-categories">
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              onClick={handleCategorySelect}
              isSelect={idSelectCategory == category.id}
            />
          );
        })}
      </div>
      <div>
        {loading ? (
          <div>
            <div className="loader"></div>
          </div>
        ) : error ? (
          <Error />
        ) : (
          <div className="ct-books">
            {books.length > 0 ? (
              books.map((book) => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.name}
                    description={book.description}
                    author={book.author}
                    year={book.year}
                    img={book.url_img}
                    onClick={handleBookSelect}
                    isSelect={idSelectBook == book.id}
                  />
                );
              })
            ) : (
              <NotResult />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
