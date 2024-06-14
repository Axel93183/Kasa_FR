import { useParams } from "react-router-dom";
import kasa_data from "../assets/json/kasa_data.json";
import "../assets/sass/pages/_housing.scss";

function Housing() {
  const { id } = useParams();

  const housing = kasa_data.filter((item) => item.id === id).pop();

  return (
    <div>
      <h2>Fiche Logement</h2>
      {/* {housing.cover} dans une img src="" */}
      {housing.description}
      {housing.equipments}
      {/* {housing.host} c est un objet (clés : name et picture)*/}
      {housing.id}
      {housing.location}
      {/* {housing.pictures} */}
      {housing.rating}
      {housing.tags}
      {housing.title}
    </div>
  );
}

export default Housing;
