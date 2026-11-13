import Card from "./Card.jsx";

const List = ({ selectedManufacture, figures, onSelectedCard }) => {
  const filteredFigures = figures.filter((figure) => {
    return (
      selectedManufacture.length === 0 ||
      selectedManufacture.includes(figure.manufacturer)
    );
  });

  return (
    <section className="list">
      {filteredFigures.map((figure) => {
        return (
          <Card
            {...figure}
            key={figure.id}
            onClick={() => onSelectedCard(figure)}
          />
        );
      })}
    </section>
  );
};
const Header = ({ filterToggle }) => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Figure Board</h1>
        <button type="button" className="filter-button" onClick={filterToggle}>
          <svg className="filter-icon">
            <use href="/icons.svg#funnel--fill"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
export { List };
export { Header };
