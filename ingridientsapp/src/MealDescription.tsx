import {FC} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { IRecipe } from './models';

interface MealDescriptionProps {
    recipes: IRecipe[]
}

const MealDescription: FC<MealDescriptionProps> = ({recipes}) => {

        return(
            <div className='meal_container'>
                {recipes.map((recipe: IRecipe) => (
                    <div key={uuidv4()} className='meal_block'>
                        <div>Name: {recipe.name}</div>
                        <div>Type: {recipe.type}</div>
                        <div>Ingridients: </div>
        
                        <ul>
                            {recipe.ingridients.map(ingridient => (
                                <li key={uuidv4()}>
                                    {ingridient.val}
                                </li>
                            ))}
                        </ul>
                        <div>How to cook: {recipe.howToCook}</div>
                    </div>
                ))}
            </div>
        )
}

export default MealDescription;