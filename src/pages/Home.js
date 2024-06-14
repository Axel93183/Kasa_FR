import kasa_data from "../assets/json/kasa_data.json";
import "../assets/sass/pages/_home.scss";
import Banner from "../components/Header/Banner";
import CardList from "../components/main/CardList";

function Home() {
  return (
    <div>
      <Banner />
      <CardList data={kasa_data} />
    </div>
  );
}

export default Home;
