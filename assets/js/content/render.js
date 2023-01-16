const convertArrayIntoHtml = (recipeList) => {
    return Object.values(recipeList).reduce((acc, recipe) => {
        acc += `
        <li class="recipeItem" id="recipe-${recipe.id}">
        <div class="recipeDesc">
            <ion-icon name="fast-food-outline"></ion-icon>
            <p>${recipe.name}</p>
        </div>
        <div class="editArea"> 
            <ion-icon alt="edit" name="create-outline" class="editBtn"></ion-icon>
        </div>
        </li>
        `
        return acc
    }, "")
}


export { convertArrayIntoHtml }