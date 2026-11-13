import { useState } from "react";
const AddItem = ({ onAddItem }) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemManufacturer, setItemManufacturer] = useState("");
  const [itemDate, setItemDate] = useState("");
  const [itemImg, setItemImg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: itemTitle,
      manufacturer: itemManufacturer,
      dateObtained: itemDate,
      img: itemImg,
    };
    onAddItem(newItem);
    setItemTitle("");
    setItemManufacturer("");
    setItemDate("");
    setItemImg("");
  };
  return (
    <section className="addItem">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new Item</h2>
        <div className="addInput">
          <label htmlFor="title" className="input">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={itemTitle}
            onChange={(e) => setItemTitle(e.target.value)}
          />
        </div>
        <div className="addInput">
          <label htmlFor="manufacturer" className="input">
            Manufacturer
          </label>
          <input
            type="text"
            id="manufacturer"
            value={itemManufacturer}
            onChange={(e) => setItemManufacturer(e.target.value)}
          />
        </div>
        <div className="addInput">
          <label htmlFor="gotDate" className="input">
            Date obtained
          </label>
          <input
            type="date"
            id="gotDate"
            value={itemDate}
            onChange={(e) => setItemDate(e.target.value)}
          />
        </div>
        <div className="addInput">
          <label htmlFor="img" className="input">
            Image
          </label>
          <input
            type="file"
            id="img"
            value={itemImg}
            onChange={(e) => setItemImg(e.target.value)}
          />
        </div>
        <button type="submit" className="addButton">
          Add
        </button>
      </form>
    </section>
  );
};
export default AddItem;
