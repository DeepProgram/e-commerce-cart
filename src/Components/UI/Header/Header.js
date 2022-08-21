import { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "./meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartButtonClicked={props.cartButtonHandler}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Delicious Food" />
      </div>
    </Fragment>
  );
}

export default Header;
