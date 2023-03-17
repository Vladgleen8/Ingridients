import { ChangeEventHandler, useState, FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import IngridientsInput from "./IngridientsInput";
import { IRecipe } from "./models";
import OutlinedInput from '@mui/material/OutlinedInput';
import {InputLabel} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


interface NewRecipeProps {
    recipes: IRecipe[],
    setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>,
}

const NewRecipe: FC<NewRecipeProps> = ({recipes, setRecipes}) => {

    const [recipe, setRecipe] = useState<IRecipe>({
        name: '',
        type: '',
        howToCook: '',
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
    
    const handleHowToCookChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
        const target = e.target as HTMLInputElement;
        setRecipe({...recipe, howToCook: target.value})
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault(); 
        setRecipes([...recipes, recipe])
    }

    const {name, type, howToCook} = recipe;

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
                <Button className="recipe-form" variant="outlined" type='submit'>Add</Button>
            </form>
        </>
    )
}

export default NewRecipe;