import { Books } from "../components/books";
import { Categories } from "../components/categories";
import { Search } from "../components/search";
import "../styles/home.css";

export const Home = () => {
  return (
    <div className="ct-home">
      <Search />
      <Categories />
      <Books />
    </div>
  );
};
