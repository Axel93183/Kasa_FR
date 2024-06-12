import { Link } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import "../../assets/sass/components/_header.scss";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">À Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
