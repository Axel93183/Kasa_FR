import { BrowserRouter as Router } from "react-router-dom";
import MyRouter from "../../routes/MyRouter";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/a-propos">A Propos</a>
            </li>
            <li>
              <a href="/fiche-logement">Fiche Logement</a>
            </li>
          </ul>
        </nav>
        <MyRouter />
      </div>
    </Router>
  );
}

export default App;
