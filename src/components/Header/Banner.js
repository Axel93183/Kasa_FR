import image from "../../assets/images/banner-home.png";
import "../../assets/sass/components/_banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={image} alt="petite crique au bord d'une falaise" />
      <div className="content">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
