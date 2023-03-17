import { ChangeEventHandler, useState, FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import IngridientsInput from "./IngridientsInput";
import { IRecipe } from "./models";
import OutlinedInput from '@mui/material/OutlinedInput';
import {InputLabel} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ReactStars from "react-rating-stars-component";



interface NewRecipeProps {
    recipes: IRecipe[],
    setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>,
}

const NewRecipe: FC<NewRecipeProps> = ({recipes, setRecipes}) => {

    const [recipe, setRecipe] = useState<IRecipe>({
        name: '',
        type: '',
        howToCook: '',
        difficulty: 0,
        rating: 0,
        time: {
            hours: '0',
            minutes: '0'
        },
        ingridients: [{id: uuidv4(), val: ''},]
    })
        
    const handleNameChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
        const target = e.target as HTMLInputElement;
        setRecipe({...recipe, name: target.value})
    }

    const handleTypeChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
        const target = e.target as HTMLInputElement;
        setRecipe({...recipe, type: target.value})
    }

    const handleDifficultyChange = (newDifficulty: number) => {
        setRecipe({...recipe, difficulty: newDifficulty})
    }

    const handleHoursChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const target = e.target;
        if (target.value[0] === '0' && target.value.length > 1) {
            setRecipe({...recipe, time: {...recipe.time, hours: target.value.slice(1)}})
        } else {
            setRecipe({...recipe, time: {...recipe.time, hours: target.value}})
        }
    }

    const handleMinutesChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const target = e.target;
        if (target.value[0] === '0' && target.value.length > 1) {
            setRecipe({...recipe, time: {...recipe.time, minutes: target.value.slice(1)}})
        } else {
            setRecipe({...recipe, time: {...recipe.time, minutes: target.value}})
        }
    }

    const handleRatingChange = (newRating: number) => {
        setRecipe({...recipe, rating: newRating})
    }
    
    const handleHowToCookChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
        const target = e.target as HTMLInputElement;
        setRecipe({...recipe, howToCook: target.value})
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault(); 
        setRecipes([...recipes, recipe])
    }

    const {name, type, difficulty, rating, time, howToCook} = recipe;

    return (
        <>
            <div>Here you can add your recipe</div>
            <form className="new-recipe-form" onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="name-outlined">Recipe name</InputLabel>
                <OutlinedInput 
                    fullWidth
                    label='Recipe name'
                    id="name-outlined"
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                    name='dish'/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="type-outlined">Type</InputLabel>
                <OutlinedInput 
                    fullWidth
                    label='type'
                    id="type-outlined"
                    type='text' 
                    value={type}
                    onChange={handleTypeChange}
                    name='type'
                    />
            </FormControl>
            <IngridientsInput recipe={recipe} setRecipe={setRecipe}/>
            <FormControl>
                <InputLabel htmlFor="howtocook-outlined">How to cook</InputLabel>
                <OutlinedInput multiline
                    label='How to cook'
                    id="howtocook-outlined"
                    // className="textarea"
                    value={howToCook}
                    onChange={handleHowToCookChange}
                    name='howToCook'
                    />
            </FormControl>
            <div>Recipe difficulty</div>
            <ReactStars count={5} onChange={handleDifficultyChange} value={difficulty} char='●'/>
            <div>How much do you like this recipe</div>
            <ReactStars count={5} onChange={handleRatingChange} value={rating}/>
            <FormControl>
                <InputLabel htmlFor="hours-outlined">Hours</InputLabel>
                <OutlinedInput 
                    label='Hours'
                    id="hours-outlined"
                    value={time.hours}
                    onChange={handleHoursChange}
                    name='hours'
                    type="number"
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 23,
                        type: 'number',
                    }}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="mintes-outlined">Minutes</InputLabel>
                <OutlinedInput 
                    label='Minutes'
                    id="hours-outlined"
                    value={time.minutes}
                    onChange={handleMinutesChange}
                    name='minutes'
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 59,
                        type: 'number',
                    }}
                />
            </FormControl>
                <Button className="recipe-form" variant="outlined" type='submit'>Add</Button>
            </form>
        </>
    )
}

export default NewRecipe;