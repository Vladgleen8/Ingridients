export interface IIngridients {
    id: string,
    val: string
}

export interface IRecipe {
    name: string
    type: string
    howToCook: string
    ingridients: IIngridients[]
}

export interface IRecipesProps {
    recipes: IRecipe[],
    setRecipe: (value: {}) => void,
}