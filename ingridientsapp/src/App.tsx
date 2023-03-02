import React, { useContext, useState } from 'react';
import MealTypes from './MealTypes';
import MealByType from './MealByType';
import './App.css'
import { MealContext, MealContextProvider } from "./MealContext";


function App() {
    
  return (
      <div className="App">
        <MealContextProvider>
            <MealTypes/>
            <MealByType />  
        </MealContextProvider>
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