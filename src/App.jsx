import "./App.css";
import Header from "./commons/header";
import { useTheme } from "./context/theme/useTheme";

import { Home } from "./home/pages/home";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme == "light" ? "theme-light" : "theme-dark"}>
      <div>
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
