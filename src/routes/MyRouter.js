import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About.js";
import Error404 from "../pages/Error-404/Error-404.js";
import Home from "../pages/Home/Home.js";
import Housing from "../pages/Housing/Housing.js";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/fiche-logement/:id" element={<Housing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default MyRouter;
