import "../../assets/sass/components/_card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt="l'aménagement intérieur du logement" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
