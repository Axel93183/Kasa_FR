import image from "../../assets/images/banner-about.png";
import "./About.scss";
import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";

function About() {
  return (
    <div className="about">
      <Banner image={image} altImg="Vallée entre les montagnes" />
      <section className="main-about">
        <Collapse
          title="Fiabilité"
          content={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
        />
        <Collapse
          title="Respect"
          content={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          title="Service"
          content={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          title="Sécurité"
          content={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </section>
    </div>
  );
}

export default About;
