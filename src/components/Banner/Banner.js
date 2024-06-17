import "./Banner.scss";

function Banner({ image, title, altImg }) {
  return (
    <div className="banner">
      <img src={image} alt={altImg} />
      {title && (
        <div className="content">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}

export default Banner;
