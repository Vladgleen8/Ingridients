export interface IIngridients {
    id: string
    val: string
}

export interface ITime {
    hours: string
    minutes: string
}

export interface IRecipe {
    name: string
    type: string
    howToCook: string
    rating: number
    time: ITime
    difficulty: number
    ingridients: IIngridients[]
}

export interface IRecipesProps {
    recipes: IRecipe[],
    setRecipe: (value: {}) => void,
}