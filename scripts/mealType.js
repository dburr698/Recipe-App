
const searchButton = document.getElementById("searchButton")
const searchTextBox = document.getElementById("searchTextBox")
const mealTypeSelect = document.getElementById("mealTypeSelect")

// function to get breakfast recipies from spoonacular API
function getMealTypes(showMeals) {
    const mealType = `type=${mealTypeSelect.value}`
    const dishSearch = `query=${searchTextBox.value}`
    const mealsUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ca41b9af3e8247ffb2d10344af88f280&${mealType}&${dishSearch}&number=30&sort=random`
    fetch(mealsUrl)
        .then(response => {
            return response.json()
        }).then(loadedMeals => {
            showMeals(loadedMeals.results)
        }).catch(error => {
            console.log(error)
        })

}

// function to get random list of recipies
function getAllRecipies(showMeals) {
    const recipiesURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ca41b9af3e8247ffb2d10344af88f280&query=&cuisine=&diet=&number=30&sort=random"
    fetch(recipiesURL)
    .then(function(response) {
        return response.json()
    }).then(loadedMeals => {
        showMeals(loadedMeals.results)
    }).catch(error => {
        console.log(error)
    })
}

function routeToRecipePage(recipeId) {
    window.location.href="recipePage.html"+`?id=${recipeId}`
    
}

// create a function to display the different meals
function displayMeals(meals) {
    const mealItems = meals.map(function (dish) {
        return `<li onClick= routeToRecipePage(${dish.id})>
        <img id = "recipeImage" src=${dish.image}>
        <h3>${dish.title}</h3>
    </li>`
    })
    mealsUL.innerHTML = mealItems.join("")
}

// addEventListener to search button to call search and display functions
searchButton.addEventListener('click', function () {
    getMealTypes(meals => {
        displayMeals(meals)
    })

    searchTextBox.value = ""
    mealTypeSelect.value = "default"

})

// call getAllRecipes when page opens
getAllRecipies(meals => {
    displayMeals(meals)
})