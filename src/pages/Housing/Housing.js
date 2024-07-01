import { useParams } from "react-router-dom";
import kasa_data from "../../assets/json/kasa_data.json";
import Collapse from "../../components/Collapse/Collapse";
import Gallery from "../../components/Gallery/Gallery";
import HousingInfos from "../../components/HousingInfos/HousingInfos";
import Error404 from "./../Error-404/Error-404";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();

  const housing = kasa_data.find((item) => item.id === id);

  if (!housing) {
    return <Error404 />;
  }

  const equipmentsList = (
    <ul>
      {housing.equipments.map((equipment, index) => (
        <li key={index}>
          {equipment.charAt(0).toUpperCase() + equipment.slice(1)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="housing">
      <Gallery pictures={housing.pictures} title={housing.title} />
      <HousingInfos item={housing} />
      <section className="description-and-equipment">
        <Collapse title="Description" content={housing.description} />
        <Collapse title="Équipements" content={equipmentsList} />
      </section>
    </div>
  );
}

export default Housing;
