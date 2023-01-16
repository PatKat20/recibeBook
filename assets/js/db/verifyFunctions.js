function verifyAlreadyDish(recipeName, database){
    let booleanRes = false
    Object.values(database).forEach(recipe => {
        if(recipe.name.toLowerCase() == recipeName.toLowerCase()){
            booleanRes = true
        }
    })
    return booleanRes
}

export { verifyAlreadyDish }