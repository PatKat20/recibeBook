import { recipesMethod } from "../db/recipes.js";
import { insertRecipesIntoSection, insertRecipeIntoInputs } from "../content/insertFunctions.js";

function recipeEvent(event) {
    const sectionInput = document.querySelector(".inputArea")
    const recipeArea = document.querySelector(".recipeArea")
    const recipe = event.currentTarget.parentElement;
    const id = recipe.id.split("-")[1];
    const recipeInfo = recipesMethod.getRecipeById(id);

    insertRecipesIntoSection(recipeInfo)
    verifyAndInsertClass(recipe)

    sectionInput.classList.add("escondido")
    sectionInput.id = id
    recipeArea.classList.remove("hidden");
    recipeArea.style.zIndex = "99"
}

function editBtnEvent() {
    const editBtn = document.querySelector(".editRecipe")
    const addReceita = document.querySelector("#addRecipe")

    const id = this.parentElement.id.split("-")[1]
    const recipeInfo = recipesMethod.getRecipeById(id)
    insertRecipeIntoInputs(recipeInfo, "Editar receita")
    editBtn.id = id
    addReceita.style.display = "none";
    editBtn.style.display = "flex";
    editBtn.onclick = onEditButtonEvent;
}

function onEditButtonEvent(event) {
    const id = event.currentTarget.id
    const recipeName = document.getElementById("recipeName");
    const ingredientDesc = document.getElementById("ingredientDesc");
    const howToMake = document.getElementById("howTo");

    recipesMethod.updateRecipeItem(id, recipeName.value, ingredientDesc.value, howToMake.value)
}

function verifyAndInsertClass(recipeClicked) {
    const selected = document.querySelector(".selecionado");
    if (selected !== null) {
        selected.classList.remove("selecionado")
    }
    recipeClicked.classList.add("selecionado")
}

function insertEventOnRecipe() {
    const recipeItens = document.querySelectorAll(".recipeDesc")
    const btnEdit = document.querySelectorAll(".editArea")
    recipeItens.forEach(recipe => recipe.onclick = recipeEvent)
    btnEdit.forEach(btn => btn.onclick = editBtnEvent)
}

export { insertEventOnRecipe }