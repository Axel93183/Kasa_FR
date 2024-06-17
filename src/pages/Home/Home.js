import image from "../../assets/images/banner-home.png";
import kasa_data from "../../assets/json/kasa_data.json";
import "./Home.scss";
import CardList from "../../components/CardList/CardList";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div>
      <Banner
        image={image}
        title="Chez vous, partout et ailleurs"
        altImg="Petite crique au bord d'une falaise"
      />
      <CardList data={kasa_data} />
    </div>
  );
}

export default Home;
