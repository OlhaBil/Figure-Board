import { List } from "./components/List.jsx";
import { Header } from "./components/List.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";

const App = () => {
  const [selectedManufacture, setSelectedManufacture] = useState([]);
  const [filterOnOff, setFilterOnOff] = useState(true);
  const handleFilter = () => {
    setFilterOnOff(!filterOnOff);
  };
  return (
    <>
      <Header filterToggle={handleFilter} />
      <div
        className={`container ${filterOnOff ? "with-sidebar" : "wout-sidebar"}`}
      >
        <List selectedManufacture={selectedManufacture} />
        <div className="sidebar-container">
          <Sidebar
            selectedManufacture={selectedManufacture}
            setSelectedManufacture={setSelectedManufacture}
          />
        </div>
      </div>
    </>
  );
};
export { App };
