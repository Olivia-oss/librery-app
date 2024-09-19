import PropTypes from "prop-types";

export const Book = ({
  id,
  title,
  description,
  author,
  year,
  img,
  isSelect,
  onClick,
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
