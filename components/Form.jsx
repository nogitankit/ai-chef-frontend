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

    //for the scroll thing once the recipe shows up
    const recipeSection = React.useRef(null)
    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
            
        }
        
    }, [recipe]) 

    async function getRecipe(){
        setLock(true)
        try{
            const recipeMarkdown = await getRecipeFromChef(ingredients)
            setRecipe(recipeMarkdown)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLock(false)
        }
        
    }

    return(
        <main>
            <h3 className="form-instruction">
               What's in your fridge?
            </h3>
            <form action={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder=" e.g. oregano"
                    name="ingredient"
                />
                <button> + Add Ingredient</button>
            </form>

            {
                ingredients.length > 0 &&
                <IngredientList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} isLocked={lock} recipeAvailable={recipe !== ""}/>
            }
            {
                recipe && <Recipe recipe = {recipe}/>
            }
            
        </main>
    )
}