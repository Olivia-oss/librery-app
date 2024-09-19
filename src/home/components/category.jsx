import PropTypes from "prop-types";

export const Category = ({ id, name, onClick, isSelect }) => {
  return (
    <button
      className={isSelect ? "btn-category btn-select" : "btn-category "}
      onClick={() => onClick(id)}
    >
      {name}
    </button>
  );
};

Category.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelect: PropTypes.bool,
};
