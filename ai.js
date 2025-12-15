export async function getRecipeFromChef(ingredientsArr) {
    try {

        const response = await fetch("https://api.mayojs.xyz/get-recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ingredients: ingredientsArr })
        });

        if (!response.ok) {
            throw new Error("Server response was not ok");
        }

        const data = await response.json();
        return data.recipe;

    } catch (err) {
        console.error("Connection Error:", err);
        return "Could not reach the server.";
    }
}

/** 
import { GoogleGenerativeAI } from "@google/generative-ai"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const genAI = new GoogleGenerativeAI("my-api")

export async function getRecipeFromChef(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const model = genAI.getGenerativeModel({
            model: "gemma-3-27b-it", 
        })
        const fullPrompt = `${SYSTEM_PROMPT}\n\nUser: I have ${ingredientsString}. Please give me a recipe you'd recommend I make! [IN MARKDOWN]`
        console.log(fullPrompt)
        const result = await model.generateContent(fullPrompt)
        const response = await result.response
        return response.text()
        
    } catch (err) {
        console.error(err.message)
        return "Could not fetch recipe from Gemini."
    }
}
*/
