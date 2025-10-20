import { Outlet } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header
        id="header"
        logoShape="/images/logo/flora-logo-shape.svg"
        logoText="/images/logo/flora-logo-text.svg"
      />
      <main>
        <Outlet />
      </main>
      <Footer
        logoShape="/images/logo/flora-logo-shape.svg"
        logoText="/images/logo/flora-logo-text.svg"
      />
    </>
  );
}

export default App;
