import {useContext, useState} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Input from "../Form/Input";
import AmountContext from "../../Context/amount-context";

function MealItem(props) {
    const [amount, setAmount] = useState(1);
    const contextObj = useContext(AmountContext);

    const addButtonHandler = (event) => {
        event.preventDefault();
        contextObj.dispatchAmount({
            id: props.id,
            amount: amount,
            price: props.price,
            name: props.name
        });
    };

    const inputHandler = (event) => {
        setAmount(event.target.value);
    };

    return (
        <div className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>
                    ${parseFloat(props.price).toFixed(2)}
                </div>
            </div>
            <span>
        <Input inputChangeHandler={inputHandler}></Input>
        <MealItemForm amountAddHandler={addButtonHandler}></MealItemForm>
      </span>
        </div>
    );
}

export default MealItem;
