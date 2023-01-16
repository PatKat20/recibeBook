import { convertArrayIntoHtml } from "./render.js";
import { insertEventOnRecipe } from "../events/onRecipeCardEvent.js"
import { changeModals } from "../events/onButtonsControlEvent.js"

const insertRecipesIntoSection = (recipeObj) => {
    const recipeTitle = document.getElementById("recipeTitle");
    const ingredientParagraph = document.getElementById("ingredientInsert");
    const recipeParagraph = document.getElementById("recipePrepare");
    recipeTitle.innerHTML = recipeObj.name;
    ingredientParagraph.value = recipeObj.ingredient
    recipeParagraph.value = recipeObj.prepareDesc
}

const insertRecipeIntoInputs = (recipeObj, textValue) => {
    const recipeTitle = document.querySelector(".mainSection-title");
    const recipeName = document.getElementById("recipeName");
    const ingredientDesc = document.getElementById("ingredientDesc");
    const howToMake = document.getElementById("howTo");

    recipeTitle.innerText = textValue
    recipeName.value = recipeObj.name || "";
    ingredientDesc.value = recipeObj.ingredient || ""
    howToMake.value = recipeObj.prepareDesc || ""

    changeModals()
}

function insertIntoRecipes(recipesList) {
    const lista = document.getElementById("recipe")
    const recipes = convertArrayIntoHtml(recipesList)
    lista.innerHTML = recipes
    insertEventOnRecipe()
}

export {insertRecipesIntoSection , insertRecipeIntoInputs, insertIntoRecipes}