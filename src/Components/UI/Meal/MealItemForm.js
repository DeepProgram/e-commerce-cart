import { Fragment } from "react";
import classes from "./MealItemForm.module.css";
function MealItemForm(props) {
  return (
    <Fragment>
      <form className={classes.form}>
        <button className={classes.button} onClick={props.amountAddHandler}>
          +Add
        </button>
      </form>
    </Fragment>
  );
}

export default MealItemForm;
