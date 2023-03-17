import {FC, ChangeEventHandler} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IRecipe, IIngridients } from './models';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


interface IngridientsInputProps {
    recipe: IRecipe,
    setRecipe: React.Dispatch<React.SetStateAction<IRecipe>>,
}

const IngridientsInput: FC<IngridientsInputProps> = ({recipe, setRecipe}) => {

    const addIngridientsInput = () => {
        setRecipe({...recipe, ingridients: [...ingridients, {
            id: uuidv4(),
            val: '',
        }]});
    };

    const handleIngridientsChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        const currId = target.id;
        const newIngridients = recipe.ingridients.map((el: {id: string, val: string}) => {
            if (el.id == currId) {
                return {...el, val: target.value}
            } else {
                return el;
            }
        })
        setRecipe({...recipe, ingridients: newIngridients})
    }

    const {ingridients} = recipe;

    return(
        <div>
            <FormControl>
                <InputLabel>Ingridients</InputLabel>
                <div>
                    {ingridients.map((el: IIngridients) => {
                        return( 
                            <div>
                                <OutlinedInput
                                    style={{marginBottom: 20}}
                                    label='Ingridients'
                                    // key={uuidv4()}  
                                    id={el.id}
                                    value={el.val}
                                    onChange={handleIngridientsChange}
                                />
                            </div>
                    )})}
                </div>
            </FormControl>
            <div>
                <Button type='button' variant="outlined" onClick={addIngridientsInput}>Add More</Button>
            </div>
        </div>
    )
}

export default IngridientsInput;