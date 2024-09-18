export const Categories = () => {
  return (
    <div className="ct-categories">
      <Category name={"Ciencia Ficcion"} />
      <Category name={"Ciencia Ficcion"} />
      <Category name={"Ciencia Ficcion"} />
    </div>
  );
};

const Category = ({ name }) => {
  return <button className="btn-category">{name}</button>;
};

Category.propTypes = {
  name: String,
};
