import { Route, Routes } from "react-router-dom";
import APropos from "../pages/A-Propos.js";
import Error404 from "../pages/Error-404.js";
import FicheLogement from "../pages/Fiche-Logement.js";
import Home from "../pages/Home.js";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/fiche-logement" element={<FicheLogement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default MyRouter;
