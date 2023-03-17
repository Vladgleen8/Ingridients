import { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import MealPlan from './MealPlan';
import Order from './Order';
import NewRecipe from './NewRecipe';
import NotFoundPage from './NotFoundPage';
import Layout from './Layout';
import { IRecipe } from "./models";
import './App.css'



function App() {

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '');
    if (recipes) {
      setRecipes(recipes);
    }
  }, []);
    
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<MealPlan recipes={recipes}/>} />
            <Route path='order' element={<Order />}/>
            <Route path='newrecipe' element={<NewRecipe recipes={recipes} setRecipes={setRecipes}/>}/>
          <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App



/*
1. Cделать валидацию формы, проверка введеных значений и отсутсвия пустых полей, времени
2. Проверить можно ли сделать что бы значение в input type number не менялось по скроллу
3. модалка проверки с превью поста и как он будет отображаться с подтверждениями 
4. нормальное отображение рецепта в meals - css и все дела 

*/




  // react query, tan stack query 
  // axios 
  // zustand

// ou should set type of setValue inside IDatePickerProps to:

// setValue : React.Dispatch<React.SetStateAction<string>>
// Or change setValue inside onChangeHandler to:

// setValue: (value: string) => void;


