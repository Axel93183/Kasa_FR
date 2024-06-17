import { Link } from "react-router-dom";
import "./CardList.scss";
import Card from "../Card/Card.js";

function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((item) => (
        <Link to={`/fiche-logement/${item.id}`} key={item.id}>
          <Card housing={item} />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
