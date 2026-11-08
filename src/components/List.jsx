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
const Header = () => {
  return (
    <div className="header">
      <h1>Figure Board</h1>
    </div>
  );
};
export { List };
export { Header };
