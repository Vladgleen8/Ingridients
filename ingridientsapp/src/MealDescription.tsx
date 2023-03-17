import {FC} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { IRecipe, ITime } from './models';
import ReactStars from "react-rating-stars-component";


interface MealDescriptionProps {
    recipes: IRecipe[]
}


const TimeHandler = ({hours, minutes} :ITime) => {
    if (hours === '0') {
        return <div>Time: {minutes} {minutes === '1' ? 'minute' : 'minutes'}</div>
    } 

    if (minutes === '0') {
        return <div>Time: {hours} {hours === '1' ? 'hour' : 'hours'} </div>
    }
}


const MealDescription: FC<MealDescriptionProps> = ({recipes}) => {

    return(
        <div className='meal_container'>
                {recipes.map((recipe: IRecipe) => (
                    <div key={uuidv4()} className='meal_block'>
                        <div>Name: {recipe.name}</div>
                        <div>Type: {recipe.type}</div>
                        <span>Difficulty</span><ReactStars edit={false} value={recipe.difficulty} char='●'/>
                        <TimeHandler hours={recipe.time.hours} minutes={recipe.time.minutes}/>
                        <span>Rating</span><ReactStars edit={false} value={recipe.rating}/>
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