import { useEffect } from "react";
import "./App.css";
import Footer from "./commons/footer";
import Header from "./commons/header";
import { useTheme } from "./context/theme/useTheme";

import { Home } from "./home/pages/home";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme == "light" ? "theme-light" : "theme-dark";
  }, [theme]);

  return (
    <div>
      <Header />

      <Home />
      <Footer />
    </div>
  );
}

export default App;
