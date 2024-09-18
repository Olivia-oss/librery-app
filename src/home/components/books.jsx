import { useEffect, useState } from "react";
import { useBooks } from "../../hooks/useBook";
import PropTypes from "prop-types";

export const Books = () => {
  const [idSelect, setIdSelect] = useState(-1);
  const { books, gellAllBook, loading } = useBooks();

  const handleBookSelect = (id) => {
    if (id == idSelect) {
      setIdSelect(-1);
    } else {
      setIdSelect(id);
    }
  };

  useEffect(() => {
    gellAllBook();
  }, [gellAllBook]);

  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div className="ct-books">
          {books.map((book) => {
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
                isSelect={idSelect == book.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const Book = ({
  id,
  title,
  description,
  author,
  year,
  img,
  onClick,
  isSelect,
}) => {
  return (
    <div
      className={isSelect ? "ct-book ct-book-select" : "ct-book"}
      onClick={() => onClick(id)}
    >
      <div className="ct-book-main">
        <img src={img} className={isSelect ? "border-radius" : ""} />
        <h3 className={isSelect ? "display-none" : ""}>{title}</h3>
      </div>
      <div
        className={
          isSelect ? "ct-book-details " : "ct-book-details display-none"
        }
      >
        <h3>{title}</h3>
        <div>
          <label>
            {author} - {year}
          </label>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string,
  year: PropTypes.number,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelect: PropTypes.bool,
};
