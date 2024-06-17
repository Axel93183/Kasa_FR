import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.scss";
function Rating({ rating }) {
  const fullStars = parseInt(rating, 10);

  const stars = Array(5).fill("empty");

  for (let i = 0; i < fullStars; i++) {
    stars[i] = "full";
  }

  // console.log(stars);

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarSolid}
          className={star === "full" ? "full-star" : "empty-star"}
        />
      ))}
    </div>
  );
}

export default Rating;
