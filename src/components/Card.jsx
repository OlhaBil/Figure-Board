const Card = ({ title, img, author }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};
export default Card;
