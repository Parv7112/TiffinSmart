import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/utils/Style.css";
import ScrollToTop from "react-scroll-to-top"


import Routers from "./pages/Routers";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {

  
 
  return (
    <>
      <Routers />
      <ScrollToTop/>
    </>
  );
};

export default App;
