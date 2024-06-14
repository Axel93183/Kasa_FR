import { BrowserRouter as Router } from "react-router-dom";
import "./assets/sass/_app.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import MyRouter from "./routes/MyRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MyRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
