export default function IngredientList(props){

    const ingredientsListItems = props.ingredients.map((ingredient,index) => (
        <li key={index}>{ingredient}</li>
    ))
     
    return (
        <section>
            <div className="ingredients">
                <h1>Ingredients on hand:</h1>
                <ul>
                    {ingredientsListItems}
                </ul>
            </div>
           
            {props.ingredients.length > 2 && 
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button 
                    onClick={props.getRecipe}
                    disabled={props.isLocked || props.recipeAvailable}
                    style={{ 
                        cursor: props.isLocked ? "not-allowed" : "pointer",
                        opacity: props.isLocked ? 0.8 : 1
                    }}
                >
                    {props.isLocked ? "Thinking..." : "Get a recipe"}
                </button>
            </div>
            }
            </section>
    )
}