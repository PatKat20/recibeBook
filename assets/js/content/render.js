import { insertEventOnRecipe } from "../events/onRecipeCardEvent.js"

const convertArrayIntoHtml = (recipeList) =>{
    return Object.values(recipeList).reduce((acc, recipe) =>{
        acc += `
        <li class="recipeItem" id="recipe-${recipe.id}">
            <ion-icon name="fast-food-outline"></ion-icon>
            <p>${recipe.name}</p>
        </li>
        `
        return acc
    }, "")
}

const convertRecipesIntoSection = (recipeObj) =>{
    const recipeTitle = document.getElementById("recipeTitle");
    const ingredientParagraph = document.getElementById("ingredientInsert");
    const recipeParagraph = document.getElementById("recipePrepare");
    recipeTitle.innerHTML = recipeObj.name;
    ingredientParagraph.value = recipeObj.ingredient
    recipeParagraph.value = recipeObj.prepareDesc
}

function insertIntoRecipes(recipesList){
    const lista = document.getElementById("recipe")
    const recipes = convertArrayIntoHtml(recipesList)
    lista.innerHTML = recipes
    insertEventOnRecipe()
}

export { convertArrayIntoHtml ,insertIntoRecipes , convertRecipesIntoSection}