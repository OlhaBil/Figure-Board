const Modal = ({ figure, close }) => {
  return (
    <div className="background">
      <div className="modal">
        <div className="modal--img-placeholder">
          <img src={figure.img} className="modal--img"></img>
        </div>
        <div className="modal--text">
          <h2>{figure.title}</h2>
          <p>manufacturer:{figure.manufacturer}</p>
          <p>release year:{figure.releaseYear}</p>
          <p>date obtained:{figure.dateObtained}</p>
          <p>note:</p>
        </div>
        <button type="button" className="modal--close-button" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
