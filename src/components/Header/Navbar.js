import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_header.png";
import "../../assets/sass/components/_navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" activeclassname="active">
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
