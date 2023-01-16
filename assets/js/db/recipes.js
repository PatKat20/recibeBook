import { sequenciaId , callToast } from "../../utils/utils.js";
import { insertIntoRecipes } from "../content/insertFunctions.js";
import { verifyAlreadyDish } from "./verifyFunctions.js";

const recipesMethod = {}
const recipesDB = {}

recipesMethod.saveRecipe = () =>{
    localStorage.setItem("recipes", JSON.stringify(recipesDB))
    localStorage.setItem("id", JSON.stringify(sequenciaId._id))
}

recipesMethod.loadRecipe = () =>{
    const recipes = JSON.parse(localStorage.getItem("recipes", JSON.stringify(recipesDB)))
    const id = JSON.parse(localStorage.getItem("id", JSON.stringify(sequenciaId._id)))
    if(!recipes) return
    sequenciaId._id = id;
    Object.assign(recipesDB, recipes)
    insertIntoRecipes(recipesDB)
}

recipesMethod.getAllRecipes = () =>{
    return {...recipesDB}
}

recipesMethod.insertRecipeItem = (recipeName, ingredient, prepareDesc) =>{
    if(!recipeName || !ingredient || !prepareDesc) return
    if(verifyAlreadyDish(recipeName, recipesDB)) return callToast(`${recipeName} Já foi adicionado!`, "#FFDD00", "#FBB034")

    const id = sequenciaId.id
    recipesDB[id] = {id, name: recipeName, ingredient, prepareDesc}
    insertIntoRecipes(recipesDB)
    recipesMethod.saveRecipe()
    callToast(`${recipeName} adicionado`, "#0BAB64", "#3BB78F")
}

recipesMethod.updateRecipeItem = (id, recipeName, ingredient, prepareDesc) =>{
    if(!recipeName || !ingredient || !prepareDesc) return
    recipesDB[id] = {id, name: recipeName, ingredient, prepareDesc}
    insertIntoRecipes(recipesDB)
    recipesMethod.saveRecipe()
    callToast(`${recipeName} alterada com sucesso!`, "#0BAB64", "#3BB78F")
}

recipesMethod.getRecipeById = (id) =>{
    return recipesDB[id]
}

recipesMethod.deleteTask = id =>{
    delete recipesDB[id]
    recipesMethod.saveRecipe()
}

export { recipesMethod }