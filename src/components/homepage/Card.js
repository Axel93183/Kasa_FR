import "../../assets/sass/components/_card.scss";

function Card({ housing }) {
  return (
    <div className="card">
      <img src={housing.cover} alt="l'aménagement intérieur du logement" />
      <div className="card-content">
        <h2>{housing.title}</h2>
      </div>
    </div>
  );
}

export default Card;
