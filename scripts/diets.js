const searchTextBox = document.getElementById("searchTextBox")
const dietTypeSelect = document.getElementById("dietTypeSelect")
const searchButton = document.getElementById("searchButton")
const recipesUL = document.getElementById("recipesUL")

// function to get recipies based on diet
function getDietTypes(showMeals) {
    const dietType = `diet=${dietTypeSelect.value}`
    const userSearch = `query=${searchTextBox.value}`
    const dietUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ca41b9af3e8247ffb2d10344af88f280&number=30&${dietType}&${userSearch}&sort=random`

    fetch(dietUrl)
        .then(response => {
            return response.json()
        })
        .then(loadedMeals => {
            showMeals(loadedMeals.results)
        })
        .catch(error => console.log('error', error));
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
        <img src=${dish.image}>
        <h3>${dish.title}</h3>
    </li>`
    })
    recipesUL.innerHTML = mealItems.join("")
}

// addEventListener to search button to call search and display functions
searchButton.addEventListener('click', function () {
    getDietTypes(meals => {
        displayMeals(meals)
    })

    searchTextBox.value = ""
    dietTypeSelect.value = "default"

})

// call getAllRecipes when page opens
getAllRecipies(meals => {
    displayMeals(meals)
})