import "../css/App.css"

const Basket = (props) => {

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h4 className="modalTitle">{props.title}</h4>
          <button onClick={props.onClose} className="btn">
            &times;
          </button>
        </div>
        <div className="modalBody">{props.children}</div>
        <div className="modalFooter">
          <h5>Total: </h5>
        </div>
      </div>
    </div>
  );
};
export default Basket;
