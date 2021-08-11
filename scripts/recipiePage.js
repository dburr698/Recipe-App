const divContainer = document.getElementById("recipeContainer")

const apiKey = "e720edf96b814001bf66d1f2b8191f1a"

function getRecipe(recipesDownloaded) {
    const recipeURL = `https://api.spoonacular.com/recipes/651250/information?apiKey=${apiKey}`

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
    <div id="servTime"><h2 id="servings">Servings: <span class="info">${details.servings}</span></h2>
    <h2 id="cookTime">Total Cook Time: <span class="info"> ${details.readyInMinutes} minutes </span></h2></div>
    <div id="picIngredients"><img id="picture" src=" ${details.image}"/>
    <div id="ingredients"><h3 id="ingred">Ingredients:</h3>
    <ul id="list">${displayIngredients(details.extendedIngredients)}</ul></div></div>
    <div id="instructions">${details.instructions}</div>

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


//----------------homepage js--------------

const recipeURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=9378714895904dd88157b062a0cff48a&query=&number=3&sort=popularity'
const carouselDiv = document.getElementById("carouselDiv")
const randomRecipeBtn = document.getElementById("randomRecipeBtn")

function getPopularRecipe(popularRecipeDownloaded){
    fetch(recipeURL)
    .then(response => {return response.json()})
    .then(recipes =>{
        popularRecipeDownloaded(recipes)
    })
}

function displayPopRecipeImage(popularRecipeDownloaded){
    console.log(popularRecipeDownloaded)
   
    const recipeImages = popularRecipeDownloaded.map(function(recipeImage, index){
        return `<div class="carousel-item ${index == 0 ? "active": ""}">           
                <img src = "${recipeImage.image}" />
                </div>
       `
    }) 


function displayRandomRecipeImage(popularRecipeDownloaded){
    console.log(popularRecipeDownloaded)

    const recipeImages = popularRecipeDownloaded.map(function(recipeImage){
        return `<div id="randomRecipe">
        <a href=""><h3>${recipeImage.title}</h3></a>
        <a href=""><img src="${recipeImage.image}" alt=""></a>
      </div>`
    })
}

    carouselDiv.innerHTML = recipeImages.join("")
}

getPopularRecipe(function(recipes) {
    displayPopRecipeImage(recipes.results)
})


randomRecipeBtn.addEventListener(click, function(){
getPopularRecipe(recipes)
})