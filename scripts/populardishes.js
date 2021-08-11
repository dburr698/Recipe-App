const searchButton = document.getElementById("searchButton")
const searchTextBox = document.getElementById("searchTextBox")
const dishTypeSelect = document.getElementById("dishTypeSelect")


function getPopularDishes(showDishes) {
    const mealsUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=9378714895904dd88157b062a0cff48a&query=&number=3&sort=popularity'
    fetch(mealsUrl)
        .then(response => {
            return response.json()
        }).then(loadedDishes => {
            showDishes(loadedDishes.results)
        }).catch(error => {
            console.log(error)
        })

}
function getAllRecipes(recipesDownloaded) {

    const recipesURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=9378714895904dd88157b062a0cff48a"
    fetch(recipesURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        recipesDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })
}

// create a function to display the Popular meals
function displayDishes(Dishes) {
    const DishesItems = Dishes.results.map(function (dish) {
        return `<li>
        <img id = "recipeImage" src=${dish.image}>
        <h3>${dish.title}</h3>
    </li>`
    })
    dishesUL.innerHTML = dishItems.join("")
}


searchButton.addEventListener('click', function () {
    getDishTypes(dishes => {
        displayDishes(dishes)
    })

    searchTextBox.value = ""
    dishTypeSelect.value = "default"

})

getPopularRecipes(dishes => {
    displayDishes(dishes)
})