import {FC} from 'react';
import MealDescription from './MealDescription';
import { IRecipe } from './models';

interface MealPlanProps {
    recipes: IRecipe[],
}

const MealPlan: FC<MealPlanProps> = ({recipes}) => {
    return(
        <div>
            <div className='plan_heading'>Plan meal for week</div>
            {recipes.length ? <MealDescription recipes={recipes}/> : <div>There are no recipes currently. Try add one.</div>}
        </div>
    )
}

export default MealPlan;