import imagebroken from "../assets/images/broken.svg";
const Card = ({ title, img, author }) => {
  return (
    <div className="card">
      <div className="image-placeholder">
        {img ? (
          <img className="photo" src={img} alt={title} />
        ) : (
          <img className="broken" src={imagebroken} />
        )}
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};
export default Card;
