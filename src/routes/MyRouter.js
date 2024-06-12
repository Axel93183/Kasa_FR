import { Routes, Route } from "react-router-dom";
import APropos from "../pages/A-Propos/A-Propos.js";
import Error404 from "../pages/Error-404/Error-404.js";
import FicheLogement from "../pages/Fiche-Logement/Fiche-Logement.js";
import Home from "../pages/Home/Home.js";

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
