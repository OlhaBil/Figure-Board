import { List } from "./components/List.jsx";
import { Header } from "./components/List.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
import { figures } from "./assets/figures-data.js";
import AddItem from "./components/AddItem.jsx";

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
  return (
    <>
      <Header filterToggle={handleFilter} />
      <div
        className={`container ${filterOnOff ? "with-sidebar" : "wout-sidebar"}`}
      >
        <List figures={figuresList} selectedManufacture={selectedManufacture} />
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
