function searchRecipeByInput(input) {
    const recipeItens = document.querySelectorAll(".recipeItem");
    recipeItens.forEach(recipe => {
        const inputText = input.value.toLowerCase()
        const textRecipe = recipe.innerText.toLowerCase();
        if (textRecipe.indexOf(inputText) > -1) {
            recipe.style.display = "flex";
        } else {
            recipe.style.display = "none"
        }
    })
}

export { searchRecipeByInput }