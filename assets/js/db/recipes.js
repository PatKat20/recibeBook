import { sequenciaId } from "../../utils/utils.js"
import { insertIntoRecipes } from "../content/render.js"
import { callToast } from "../../utils/utils.js"

const recipesMethod = {}
let recipesDB = {}

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

recipesMethod.createRecipeItem = (recipeName, ingredient, prepareDesc) =>{
    if(!recipeName || !ingredient || !prepareDesc) return
    const id = sequenciaId.id
    recipesDB[id] = {id, name: recipeName, ingredient, prepareDesc}
    insertIntoRecipes(recipesDB)
    recipesMethod.saveRecipe()
    callToast(`${recipeName} adicionada`, "#0BAB64", "#3BB78F")
}

recipesMethod.getRecipeById = (id) =>{
    return recipesDB[id]
}

recipesMethod.deleteTask = id =>{
    delete recipesDB[id]
    recipesMethod.saveRecipe()
}

export { recipesMethod }