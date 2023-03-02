import API from './utils/API';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { MealContext } from './MealContext';
import { useContext } from 'react';

const MealByType = () => {
  const {mealType} = useContext(MealContext);

  const { isLoading, error, data } = useQuery({ 
    queryKey: ['menu', mealType], 
    queryFn: async () => {
        const {data} = await API.get('recipes/random', {
        params: {
          number: '3',
          tags: mealType,
        }
      })
      console.log(data)
    return data;
  }})

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

    return(
      //   <div className='main'>
      //       {data.recipes.length && data.recipes.map(el =>
      //   <div>
      //       <p key={el.id}>{el.id} {el.title}</p>
      //       <img src={el.image}></img>
      //       </div>
      //   )}
      //  </div>
        
    )
}

export default MealByType