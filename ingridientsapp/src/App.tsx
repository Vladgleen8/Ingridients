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

  // react query, tan stack query 
  // axios 
  // zustand

/*
1. страница категоризации по времени приема пищи, завтра обед ужин и т.д. - нужно получить и отобразить разные приемы пищи 
2. переход по 'завтраку' отркывает новое окно с блюдами которые обычно едят на завтрак - получить mealType и создать запрос на апи с данным параметром , отобразить название блюда и картинку,по клику строка расширяется и выскакивают ингридиенты 
у каждого блюда есть кнопочка добавить, которая сохраняет блюдо в корзине 


*/



// ou should set type of setValue inside IDatePickerProps to:

// setValue : React.Dispatch<React.SetStateAction<string>>
// Or change setValue inside onChangeHandler to:

// setValue: (value: string) => void;