const recipeURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5023bb61e64c4b21bfee5eefe6f596f1&query=&number=3&sort=popularity'
const carouselDiv = document.getElementById("carouselDiv")
const randomRecipeBtn = document.getElementById("randomRecipeBtn")
const randomRecipeDiv = document.getElementById("randomRecipeDiv")
const randomRecipeDivDisplay = document.getElementById("randomRecipeDivDisplay")
const randomRecipeUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5023bb61e64c4b21bfee5eefe6f596f1&query=&number=1&sort=random'
const searchBox = document.getElementById("searchBox")

function getPopularRecipe(popularRecipeDownloaded) {
    fetch(recipeURL)
        .then(response => { return response.json() })
        .then(recipes => {
            popularRecipeDownloaded(recipes)
        })
}

function getRandomRecipe() {
    fetch(randomRecipeUrl)
        .then(response => { return response.json() })
        .then(recipe => {
            displayRandomRecipeImage(recipe)
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        })
}


function getSearchedRecipes(resultsDownloaded) { 
    const search = `query=${searchBox.value}`

    const searchURL =`https://api.spoonacular.com/recipes/complexSearch?apiKey=e720edf96b814001bf66d1f2b8191f1a&${search}&number=25&sort=random`

    console.log(searchURL)
    fetch(searchURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        resultsDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })

}

function displayRecipes(recipesToDisplay) {
    
    const recipeItems = recipesToDisplay.results.map(function(recipe) {
        return `<li onClick= routeToRecipePage(${recipe.id})>
                    <img id = "recipeImage" src="${recipe.image}"/>
                    <h3>${recipe.title}</h3>
                </li>`
    }) 
    recipesUl.innerHTML = recipeItems.join("")
}


function routeToRecipePage(recipeId) {
    window.location.href="recipePage.html"+`?id=${recipeId}`
}

function displayPopRecipeImage(popularRecipeDownloaded){
    console.log(popularRecipeDownloaded)

   
    const recipeImages = popularRecipeDownloaded.map(function(recipeImage, index){
        return `<div onClick= routeToRecipePage(${recipeImage.id}) class="carousel-item ${index == 0 ? "active": ""}">           

                <img src = "${recipeImage.image}" />
                </div>
       `
    })

  

    carouselDiv.innerHTML = recipeImages.join("")
}


function displayRandomRecipeImage(popularRecipeDownloaded) {
    console.log(popularRecipeDownloaded)


    const recipeImages = popularRecipeDownloaded.results.map(function(recipeImage){
        return `<div onClick= routeToRecipePage(${recipeImage.id}id="randomRecipe">
        <a href=""><img src="${recipeImage.image}" alt=""></a>
        <a href=""><h3>${recipeImage.title}</h3></a>
       </div>`

    })

    randomRecipeDivDisplay.innerHTML = recipeImages.join("")
}

getPopularRecipe(function (recipes) {
    displayPopRecipeImage(recipes.results)
})


randomRecipeBtn.addEventListener("click", function () {
    getRandomRecipe()
})


