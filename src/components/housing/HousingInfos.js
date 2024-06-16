import "../../assets/sass/components/_housing/_housingInfos.scss";
import Rating from "./Rating";
import Tag from "./Tag";

function reverseLocation(location) {
  const parts = location.split(" - ");
  return `${parts[1]} - ${parts[0]}`;
}

function HousingInfos({ item }) {
  return (
    <div className="housing-infos">
      <div className="title-and-location">
        <h1 className="title">{item.title}</h1>
        <p className="location">{reverseLocation(item.location)}</p>
        <Tag tags={item.tags} />
      </div>
      <div className="host-and-rating">
        <div className="host">
          <p className="host-name">{item.host.name}</p>
          <img
            src={item.host.picture}
            alt={`portrait de ${item.host.name}`}
            className="host-picture"
          />
        </div>
        <Rating rating={item.rating} />
        {/* <div className="host-rating">star - star - star</div> */}
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
