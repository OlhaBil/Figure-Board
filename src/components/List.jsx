import { figures } from "../assets/figures-data.js";
import Card from "./Card.jsx";

const List = () => {
  return (
    <section className="list">
      {figures.map((figure) => {
        return <Card {...figure} key={figure.id} />;
      })}
    </section>
  );
};
export default List;
