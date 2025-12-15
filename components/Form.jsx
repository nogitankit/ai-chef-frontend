import React from "react"
import IngredientList from "./IngredientList"
import Recipe from "./Recipe"
import { getRecipeFromChef } from "../ai"

export default function Form(){

    
    let [ingredients, setIngredients] = React.useState([])

    function handleSubmit(stuff){   
        const newIngredient = stuff.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        
    }
    const [recipe, setRecipe] = React.useState("")
    const [lock, setLock] = React.useState(false)

    async function getRecipe(){
        setLock(true)
        const recipeMarkdown = await getRecipeFromChef(ingredients)
        setRecipe(recipeMarkdown)
    }

    return(
        <main>
            <form action={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder=" e.g. oregano"
                    name="ingredient"
                />
                <button> + Add Ingredient</button>
            </form>

            {
                ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe} isLocked={lock}/>
            }
            {
                recipe && <Recipe recipe = {recipe}/>
            }
            
        </main>
    )
}