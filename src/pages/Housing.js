import { useParams } from "react-router-dom";
import kasa_data from "../assets/json/kasa_data.json";
import "../assets/sass/pages/_housing.scss";
import HousingInfos from "../components/housing/HousingInfos";

function Housing() {
  const { id } = useParams();

  const housing = kasa_data.find((item) => item.id === id);

  return (
    <div className="housing">
      <img src={housing.cover} alt="" srcset="" />
      <HousingInfos housing={housing} />
      <section className="description-and-equipment"></section>
    </div>
  );
}

export default Housing;
