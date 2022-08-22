import classes from "./Input.module.css";

function Input(props) {
    return (<div className={classes.input}>
            <label htmlFor="Amount" className={classes.label}>
                Amount
            </label>
            <input
                type="number"
                className={classes.input}
                step="1"
                defaultValue="1"
                min="1"
                max="5"
                onChange={props.inputChangeHandler}
            ></input>
        </div>);
}

export default Input;
