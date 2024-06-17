import { Link } from "react-router-dom";
import "./Error-404.scss";

function Error404() {
  return (
    <div className="error-message-container">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to={"/"}>
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}

export default Error404;
