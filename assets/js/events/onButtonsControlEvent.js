import { recipesMethod } from "../db/recipes.js";
import { callToast } from "../../utils/utils.js";
import { insertRecipeIntoInputs } from "../content/insertFunctions.js";

function onAddButtonEvent(){
    const editBtn = document.querySelector(".editRecipe")
    const addReceita = document.querySelector("#addRecipe")

    editBtn.style.display = "none"
    addReceita.style.display = "flex";
    insertRecipeIntoInputs(false, "Adicionar receita")
    changeModals()
    removeClassSelected()
}

function onDeleteButtonEvent(){
    const sectionInput = document.querySelector(".inputArea");
    const id = sectionInput.id;
    const productInfo = recipesMethod.getRecipeById(id)
    document.getElementById(`recipe-${id}`).remove()
    changeModals()
    recipesMethod.deleteTask(id)
    recipesMethod.saveRecipe()
    callToast(`${productInfo.name} deletado com sucesso`,"#DE3163", "#E0115F")
}

function changeModals(){
    const sectionInput = document.querySelector(".inputArea");
    const recipeArea = document.querySelector(".recipeArea")
    sectionInput.classList.remove("escondido");
    recipeArea.classList.add("hidden");
    recipeArea.style.zIndex="-1"
}

function removeClassSelected(){
    document.querySelector(".recipeItem.selecionado").classList.remove("selecionado")
}
export { onAddButtonEvent , onDeleteButtonEvent, changeModals}