import classes from "./Meals.module.css";
import MealItem from "./MealItem";
import Card from "../Card/Card";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99
    }
];

function Meals() {
    const content = DUMMY_MEALS.map((data) => {
        return (
            <li key={data.id}>
                <MealItem
                    id={data.id}
                    name={data.name}
                    desc={data.description}
                    price={data.price}
                ></MealItem>
            </li>
        );
    });
    return (
        <div className={classes.meals}>
            <Card>
                <ul>{content}</ul>
            </Card>
        </div>
    );
}

export default Meals;
