import classes from "./Modal.module.css";
import Cart from "../Cart/Cart";
import ReactDOM from "react-dom"
import { Fragment } from "react";


const ModalComponent = (props)=>{
    return (
        <div className={classes.modal}>
            <Cart closeButtonHandler={props.onCloseButtonClicked}></Cart>
        </div>
    )
}

const BackDropComponent = (props)=>{
    return (
        <div className={classes.backdrop} onClick={()=>{props.clickedOnBackDrop()}}></div>
    )
}

function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDropComponent clickedOnBackDrop = {props.onBackDropClick}/>, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<ModalComponent onCloseButtonClicked ={props.onCartCloseButtonClick}/>, document.getElementById("modal-root"))}
    </Fragment>
  );
}

export default Modal;
