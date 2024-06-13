import "../assets/sass/pages/_app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MyRouter from "../routes/MyRouter";
import Navbar from "../components/Header/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MyRouter />
      </div>
    </Router>
  );
}

export default App;
