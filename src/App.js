import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
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
