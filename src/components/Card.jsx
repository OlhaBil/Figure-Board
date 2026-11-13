import imagebroken from "../assets/images/broken.svg";
const Card = ({ title, img, manufacturer, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="image-placeholder">
        {img ? (
          <img className="photo" src={img} alt={title} />
        ) : (
          <img className="broken" src={imagebroken} />
        )}
      </div>
      <div className="cardText">
        <h3>{title}</h3>
        <p>{manufacturer}</p>
      </div>
    </div>
  );
};
export default Card;
