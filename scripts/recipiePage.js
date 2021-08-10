const divContainer = document.getElementById("recipeContainer")

const apiKey = "e720edf96b814001bf66d1f2b8191f1a"

function getRecipe(recipesDownloaded) {
    const recipeURL = `https://api.spoonacular.com/recipes/665178/information?apiKey=${apiKey}`

    fetch(recipeURL)
        .then(function (response) {
            return response.json()
        }).then(function (results) {
            recipesDownloaded(results)
        }).catch(function (error) {
            console.log(error)
        })


}

function displayIngredients(ingredients) {
    
    const recipeIngredients = ingredients.map(function (ingredient) {


        return `
        <li>
            <h4>${ingredient.original}</h4>
        </li>`
    })
    return recipeIngredients.join("")

}

function displayRecipeInfo(details) {
    let recipeDisplay =
        `<h1 id="title">${details.title}</h1>
    <div id="servTime"><h2 id="servings">Servings: ${details.servings}</h2>
    <h2 id="cookTime">Total Cook Time: ${details.readyInMinutes} minutes</h2></div>
    <div id="picIngredients"><img id="picture" src="${details.image}"/>
    <div id="ingredients"><h3>Ingredients:</h3>
    <ul>${displayIngredients(details.extendedIngredients)}</ul></div></div>
    <p>${details.instructions}</p>

     `

    divContainer.innerHTML = recipeDisplay
}



getRecipe(function (info) {
    displayRecipeInfo(info)
    
    console.log(info)
})
