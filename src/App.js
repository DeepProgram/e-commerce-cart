import './App.css';
import {useReducer, useState} from "react";
import Header from "./Components/UI/Header/Header";
import MealsSummary from "./Components/UI/Meal/MealSummary";
import Meals from "./Components/UI/Meal/Meals";

import Modal from "./Components/UI/Modal/Modal";
import AmountContext from "./Components/Context/amount-context";

const amountReducer = (state, action) => {
    if (action.id) {
        const newState = JSON.parse(JSON.stringify(state.list));
        const index = newState.findIndex((data) => {
            return data.id === action.id;
        });
        if (index !== -1) {
            newState[index].amount += +action.amount;
            if (newState[index].amount === 0) newState.splice(index, 1); //Deleting The Item from Cart If Amount Reaches Zero
            return {list: newState};
        } else {
            const obj = {};
            obj["id"] = action.id;
            obj["amount"] = +action.amount;
            obj["price"] = parseFloat(action.price).toFixed(2);
            obj["name"] = action.name;
            return {list: [...newState, obj]};
        }
    }

    return {list: []};
};


function App() {
    const [amount, dispatchAmount] = useReducer(amountReducer, {list: []});
    const [showModal, setShowModal] = useState(false)
    return (
        <AmountContext.Provider value={{amount, dispatchAmount}}>
            <Header cartButtonHandler={() => {
                setShowModal(true)
            }}></Header>
            }
            <MealsSummary></MealsSummary>
            <Meals></Meals>
            {showModal && <Modal onBackDropClick={() => {
                setShowModal(false)
            }} onCartCloseButtonClick={() => {
                setShowModal(false)
            }}></Modal>}
        </AmountContext.Provider>
    );
}

export default App;
