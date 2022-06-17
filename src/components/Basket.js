import "../css/App.css";
import {} from "../App";

const Basket = ({show, onClose, title, cartItems}) => {
  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h4 className="modalTitle">{title}</h4>
          <button onClick={onClose} className="btn">
            &times;
          </button>
        </div>
        <div className="modalBody">
          { cartItems.map( ( item, removeItemFromBasket ) => (
            <div className="Cat">
              <img src={ item.url } alt="basket item" />
              <h3>{ item.name }</h3>
              <p>{ item.price }</p>
              <button
                onClick={ () => {
                  removeItemFromBasket( item.splice( 1 ) );
                } }>
                Remove
              </button>
            </div>
          ))}
            </div>
        <div className="modalFooter">
          <h5>Total: </h5>
        </div>
      </div>
    </div>
  );
};
export default Basket;
