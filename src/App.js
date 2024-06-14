import { BrowserRouter as Router } from "react-router-dom";
import "./assets/sass/_app.scss";
import Navbar from "./components/header/Navbar";
import MyRouter from "./routes/MyRouter";

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
