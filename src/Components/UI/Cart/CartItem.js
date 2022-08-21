import { useContext } from "react";
import classes from "./CartItem.module.css";
import AmountContext from "../../Context/amount-context";
function CartItem(props) {
  const contextObj = useContext(AmountContext);

  const addHandler = () => {
    contextObj.dispatchAmount({
      id: props.id,
      amount: 1,
    });
  };

  const subtractHandler = () => {
    contextObj.dispatchAmount({
      id: props.id,
      amount: -1,
    });
  };

  return (
    <div className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={subtractHandler}>−</button>
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
