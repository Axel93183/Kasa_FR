import { useParams } from "react-router-dom";
import kasa_data from "../assets/json/kasa_data.json";
import "../assets/sass/pages/_housing.scss";
import HousingInfos from "../components/housing/HousingInfos";
import Gallery from "../components/housing/Gallery";

function Housing() {
  const { id } = useParams();

  const housing = kasa_data.find((item) => item.id === id);

  return (
    <div className="housing">
      <Gallery pictures={housing.pictures} title={housing.title} />
      <HousingInfos item={housing} />
      <section className="description-and-equipment"></section>
    </div>
  );
}

export default Housing;
