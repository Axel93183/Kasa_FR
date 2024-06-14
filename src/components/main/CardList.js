import "../../assets/sass/components/_cardList.scss";
import Card from "./Card.js";

function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((item) => (
        <Card key={item.id} housing={item} />
      ))}
    </div>
  );
}

export default CardList;
