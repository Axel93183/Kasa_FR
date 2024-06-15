import kasa_data from "../assets/json/kasa_data.json";
import "../assets/sass/pages/_home.scss";
import Banner from "../components/header/Banner";
import CardList from "../components/homepage/CardList";

function Home() {
  return (
    <div>
      <Banner />
      <CardList data={kasa_data} />
    </div>
  );
}

export default Home;
