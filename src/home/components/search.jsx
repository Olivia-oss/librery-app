import { useState } from "react";
import PropTypes from "prop-types";

export const Search = ({ onClick }) => {
  const [searh, setSearh] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);

    setSearh(value);
  };
  return (
    <div className="ct-search">
      <input placeholder="Searh book" onChange={handleChange} />
      <button onClick={() => onClick(searh)}>Searh</button>
    </div>
  );
};

Search.propTypes = {
  onClick: PropTypes.func,
};
