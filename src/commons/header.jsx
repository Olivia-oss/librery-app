import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/theme/useTheme";
export default function Header() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="header">
      <h1 className="title">Librery</h1>
      {theme == "light" ? (
        <MdLightMode className="icon-theme" size={30} onClick={changeTheme} />
      ) : (
        <MdDarkMode className="icon-theme" size={30} onClick={changeTheme} />
      )}
    </div>
  );
}
