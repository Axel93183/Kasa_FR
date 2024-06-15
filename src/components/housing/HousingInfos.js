import "../../assets/sass/components/_housingInfos.scss";

function HousingInfos({ housing }) {
  return (
    <div className="housing-infos">
      <div className="title-and-location">
        <h1 className="title">{housing.title}</h1>
        <p className="location">{housing.location}</p>
        <div className="tags">tags - tags - tags</div>
      </div>
      <div className="host-and-rating">
        <div className="host">
          <p className="host-name">{housing.host.name}</p>
          <img
            src={housing.host.picture}
            alt={`portrait de ${housing.host.name}`}
            className="host-picture"
          />
        </div>
        <div className="host-rating">star - star - star</div>
      </div>
    </div>
  );
}

export default HousingInfos;

/*    {housing.cover} dans une img src=""
      {housing.description}
      {housing.equipments}
      {housing.host} c est un objet (clés : name et picture)
      {housing.id}
      {housing.location}
      {housing.pictures} c est un tableau
      {housing.rating}
      {housing.tags}
      {housing.title} */
