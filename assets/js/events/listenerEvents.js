import { recipesMethod } from "../db/recipes.js";
import { onAddButtonEvent , onDeleteButtonEvent} from "./onButtonsControlEvent.js";
import { callToast } from "../../utils/utils.js";

const buttonSend = document.getElementById("addRecipe");
const recipeName = document.getElementById("recipeName");
const ingredientDesc = document.getElementById("ingredientDesc");
const howToMake = document.getElementById("howTo");

const buttonAdd = document.querySelector(".adicionar")
const trashButton = document.querySelector(".trash")
function startEvents(){
    document.body.onload = recipesMethod.loadRecipe()

    buttonSend.addEventListener("click", _=>{
        recipesMethod.createRecipeItem(recipeName.value, ingredientDesc.value, howToMake.value)
    })

    buttonAdd.addEventListener("click", _=>{
        onAddButtonEvent()
    })

    trashButton.addEventListener("click" , _=>{
        onDeleteButtonEvent()
    })
}

export { startEvents }