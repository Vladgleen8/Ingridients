import React, { createContext, ReactNode, useState } from "react";
import MealTypes from "./MealTypes";


type MealContextType = {mealType: string, setMealType: React.Dispatch<React.SetStateAction<string>>} | null;
const MealContext = createContext<MealContextType>(null);

const MealContextProvider = ({ children }:{children: ReactNode}) => {
    const [mealType, setMealType] = useState('');

    return(
        <MealContext.Provider value={{ mealType, setMealType}}>
            {children}
        </MealContext.Provider>
    )
}

export { MealContext, MealContextProvider };