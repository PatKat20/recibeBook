import { recipesMethod } from "../db/recipes.js";
import { convertRecipesIntoSection } from "../content/render.js";

function recipeEvent(event){
    const sectionInput = document.querySelector(".inputArea")
    const recipeArea = document.querySelector(".recipeArea")
    const recipe = event.currentTarget;
    const id = recipe.id.split("-")[1];
    const recipeInfo = recipesMethod.getRecipeById(id)
    convertRecipesIntoSection(recipeInfo)
    sectionInput.classList.add("escondido")
    sectionInput.id = id
    recipeArea.classList.remove("hidden");
    recipeArea.style.zIndex="99"
}


function insertEventOnRecipe(){
    const recipeItens = document.querySelectorAll(".recipeItem")
    recipeItens.forEach(recipe => recipe.onclick = recipeEvent)
}

export { insertEventOnRecipe}