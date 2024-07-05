import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import About from "./pages/About/About.js";
import Error404 from "./pages/Error-404/Error-404.js";
import Home from "./pages/Home/Home.js";
import Housing from "./pages/Housing/Housing.js";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/fiche-logement/:id" element={<Housing />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
