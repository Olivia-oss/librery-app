import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import debounce from "just-debounce-it";

export const Search = ({ searhBook }) => {
  const [searh, setSearh] = useState("");

  const debounceSearch = useMemo(() => {
    return debounce((value) => {
      searhBook(value);
    }, 500);
  }, [searhBook]);

  const handleChange = (e) => {
    const value = e.target.value;

    setSearh(value);
    debounceSearch(value);
  };

  const handleSearch = (search) => {
    if (search != "") {
      console.log("entrar");
      searhBook(search);
    }
  };
  return (
    <div className="ct-search">
      <input placeholder="Searh book" onChange={handleChange} />
      <button onClick={() => handleSearch(searh)}>Searh</button>
    </div>
  );
};

Search.propTypes = {
  searhBook: PropTypes.func,
};
