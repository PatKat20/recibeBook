import { recipesMethod } from "../db/recipes.js";
import { callToast } from "../../utils/utils.js";

function onAddButtonEvent(){
    const sectionInput = document.querySelector(".inputArea");
    const recipeArea = document.querySelector(".recipeArea")
    sectionInput.classList.remove("escondido");
    recipeArea.classList.add("hidden");
    recipeArea.style.zIndex="-1"
    removeClassSelected()
}

function onDeleteButtonEvent(){
    const sectionInput = document.querySelector(".inputArea");
    const recipeArea = document.querySelector(".recipeArea")
    const id = sectionInput.id;
    const productInfo = recipesMethod.getRecipeById(id)
    document.getElementById(`recipe-${id}`).remove()
    sectionInput.classList.remove("escondido");
    recipeArea.classList.add("hidden");
    recipeArea.style.zIndex="-1"
    recipesMethod.deleteTask(id)
    recipesMethod.saveRecipe()
    callToast(`${productInfo.name} deletado com sucesso`,"#DE3163", "#E0115F")
}

function removeClassSelected(){
    document.querySelector(".recipeItem.selecionado").classList.remove("selecionado")
}
export { onAddButtonEvent , onDeleteButtonEvent}