export const Books = () => {
  return (
    <div className="ct-books">
      <Book />
      <Book />
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <div className="ct-book">
      <img src="https://m.media-amazon.com/images/I/81z5EKNK+7L._AC_UF894,1000_QL80_.jpg" />
    </div>
  );
};
