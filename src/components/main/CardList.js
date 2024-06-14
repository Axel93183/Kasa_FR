import "../../assets/sass/components/_cardList.scss";
import Card from "./Card.js";

function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((item) => (
        <Card key={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
}

export default CardList;
