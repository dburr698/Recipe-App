
const searchBox = document.getElementById("search")
const dropDown = document.getElementById("cuisineType")
const cuisineSubmitBtn= document.getElementById("cuisineSubmitBtn")
const recipesUl = document.getElementById("recipesUl")
const apiKey = "843765ca722c4b6fa53b40182c0bc5db"

function getSearchedRecipes(cuisinesDownloaded) {
    const cuisine = `cuisine=${dropDown.value}` 
    const search = `query=${searchBox.value}`

    const cuisineURL =`https://api.spoonacular.com/recipes/complexSearch?apiKey=e720edf96b814001bf66d1f2b8191f1a&${cuisine}&${search}&number=50&sort=random`

    console.log(cuisineURL)
    fetch(cuisineURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        cuisinesDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })

}

function getAllRecipies(recipiesDownloaded) {

    const recipiesURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=e720edf96b814001bf66d1f2b8191f1a&sort=random"

    fetch(recipiesURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        recipiesDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })
}

function routeToRecipePage(recipeId) {
    window.location.href="recipePage.html"+`?id=${recipeId}`
    
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


cuisineSubmitBtn.addEventListener("click", function() {
    
    getSearchedRecipes(function(cuisineInfo) {
        console.log(cuisineInfo)
       displayRecipes(cuisineInfo) 
        
    })
    searchBox.value = ""
    dropDown.value = ""
})


getAllRecipies(function(recipies) {
  console.log(recipies)
    displayRecipes(recipies)
    
})



