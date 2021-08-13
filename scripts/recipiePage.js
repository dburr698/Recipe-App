const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")
console.log(id)
const divContainer = document.getElementById("recipeContainer")

const apiKey = "e720edf96b814001bf66d1f2b8191f1a"

function getRecipe(recipesDownloaded) {
    const recipeURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`

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
            <h4 id="listIngredients">${ingredient.original}</h4>
        </li>`
    })
    return recipeIngredients.join("")

}

function displayRecipeInfo(details) {
    let recipeDisplay =
        `<h1 class="row justify-content-center" id="title">${details.title}</h1>
        <div class="row justify-content-evenly" id="servTime">
            <h2 class="subTitle col-lg-6 col-sm-12   text-center"id="servings">Servings: 
                <span class="info">  ${details.servings}</span>
            </h2>
            
            <h2 class="subTitle col-lg-6 col-md-12 col-sm-6 text-center "id="cookTime">Total Cook Time: 
                <span class="info"> ${details.readyInMinutes} minutes </span>
            <h2>

            
        </div>
        <div class="row" id="picIngredients">
            <div class="col-lg-8 col-md-12 col-sm-12">
                <img class="img-fluid" id="picture" src=" ${details.image}">
            </div>
            <div class="col-lg-4" id="ingredients">
                <h3 id="ingred">Ingredients:</h3>
                <ul id="list">${displayIngredients(details.extendedIngredients)}</ul>
            </div>
        </div>
        <h3 id="directions">Directions:</h3>
        <div class="ms-4"id="instructions">${details.instructions}</div>

     `

    divContainer.innerHTML = recipeDisplay
}

function changeTitle(name) {
    document.title = `${name.title}`
}




getRecipe(function (info) {
    displayRecipeInfo(info)
    changeTitle(info)
    console.log(info)
})


