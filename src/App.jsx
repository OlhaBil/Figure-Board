import { List } from "./components/List.jsx";
import { Header } from "./components/List.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
import { figures } from "./assets/figures-data.js";
import AddItem from "./components/AddItem.jsx";
import Modal from "./components/Modal.jsx";

const App = () => {
  const [selectedManufacture, setSelectedManufacture] = useState([]);
  const [filterOnOff, setFilterOnOff] = useState(false);
  const [figuresList, setFiguresList] = useState(figures);
  const handleFilter = () => {
    setFilterOnOff(!filterOnOff);
  };
  const handleAddItem = (newItem) => {
    setFiguresList((prev) => [...prev, { ...newItem, id: Date.now() }]);
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const handleModalClose = () => {
    setSelectedCard(null);
  };
  return (
    <>
      <Header filterToggle={handleFilter} />
      {selectedCard && <Modal figure={selectedCard} close={handleModalClose} />}
      ;
      <div
        className={`container ${filterOnOff ? "with-sidebar" : "wout-sidebar"}`}
      >
        <List
          figures={figuresList}
          selectedManufacture={selectedManufacture}
          onSelectedCard={setSelectedCard}
        />
        <div className="sidebar-container">
          <Sidebar
            selectedManufacture={selectedManufacture}
            setSelectedManufacture={setSelectedManufacture}
          />
        </div>
      </div>
      <AddItem onAddItem={handleAddItem} />
    </>
  );
};
export { App };
