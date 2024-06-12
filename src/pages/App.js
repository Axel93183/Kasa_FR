import "../assets/sass/pages/_app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MyRouter from "../routes/MyRouter";
import Header from "../components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
        <MyRouter />
      </div>
    </Router>
  );
}

export default App;
