import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import AmountContext from "../../Context/amount-context";

function HeaderCartButton(props) {
    const [cartAmount, setCartAmount] = useState(0)
    const contextObj = useContext(AmountContext)
    useEffect(() => {
        setCartAmount(contextObj.amount.list.length)
    }, [contextObj.amount.list])

    return (
        <button className={classes.button} onClick={() => {
            props.cartButtonClicked()
        }}>
        <span className={classes.icon}>
            <CartIcon>3</CartIcon>
        </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartAmount}</span>
        </button>
    );
}

export default HeaderCartButton;
