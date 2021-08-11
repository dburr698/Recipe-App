
const searchBox = document.getElementById("search")
const dropDown = document.getElementById("cuisineType")
const cuisineSubmitBtn= document.getElementById("cuisineSubmitBtn")
const recipesUl = document.getElementById("recipesUl")
const apiKey = "e720edf96b814001bf66d1f2b8191f1a"

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

    const recipiesURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=e720edf96b814001bf66d1f2b8191f1a"

    fetch(recipiesURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        recipiesDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })
}


function displayRecipes(recipesToDisplay) {
    //recipesUl.innerHTML = "" //clear out all recipies

    const recipeItems = recipesToDisplay.results.map(function(recipe) {
        return `<li>
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
    dropDown.value = "default"
})


getAllRecipies(function(recipies) {
    console.log(recipies)
    displayRecipes(recipies)
    
})

document.querySelector(".navbar-toggler").addEventListener("click", function(e){ 
    document.querySelector("#SpartanNavbar").classList.toggle("show"); }); 

