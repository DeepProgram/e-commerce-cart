import {useEffect, useState} from "react";
import { useContext } from "react";
import AmountContext from "../../Context/amount-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const contextObj = useContext(AmountContext);

  useEffect(()=>{
    let tempTotalPrice = 0
    for (const amount of contextObj.amount.list){
      tempTotalPrice += amount.amount * amount.price
    }
    setTotalPrice(tempTotalPrice)
  }, [contextObj])

  if (contextObj.amount.list.length === 0) {
    return <h1>Nothing In The Cart</h1>;
  }




  const content = contextObj.amount.list.map((data) => {
    return (
      <CartItem
        key={data.id}
        id={data.id}
        name={data.name}
        price={data.price}
        amount={data.amount}
      ></CartItem>
    );
  });




  return (
    <div>
      <ul className={classes["cart-items"]}>
        {content}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${parseFloat(totalPrice).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} type="click" onClick={()=>{props.closeButtonHandler()}}>
          Close
        </button>
        <button className={classes.button} type="click" onClick={()=>{console.log("Ordering....")}}>
          Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
