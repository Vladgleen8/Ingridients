import { useContext } from "react";
import React from "react";
import { MealContext } from "./MealContext";

const menuElements = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink'];

const MealTypes = () => {

    const {setMealType} = useContext(MealContext);
    
    return(
        <div className="sidebar">
            {menuElements.map(el => {
                return <div className="sidebar_menu" onClick={() => setMealType(el)} key={el}>{el}</div>
            })}
        </div>
        )
}

export default MealTypes;