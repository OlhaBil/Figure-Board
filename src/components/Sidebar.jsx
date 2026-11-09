import { figures } from "../assets/figures-data.js";

const Sidebar = ({ selectedManufacture, setSelectedManufacture }) => {
  const handleMChange = (manufacturer) => {
    setSelectedManufacture((prev) => {
      if (prev.includes(manufacturer)) {
        return prev.filter((item) => item !== manufacturer);
      }
      return [...prev, manufacturer];
    });
  };
  const manufacturers = [
    ...new Set(figures.map((figure) => figure.manufacturer)),
  ];
  return (
    <section className="sidebar">
      <h3>Filters</h3>
      <div>
        <h4>Manufacture</h4>
        <ul>
          {manufacturers.map((manufacturer) => (
            <li key={manufacturer}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedManufacture.includes(manufacturer)}
                  onClick={() => handleMChange(manufacturer)}
                ></input>
                {manufacturer}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Sidebar;
