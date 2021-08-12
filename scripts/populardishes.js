// const searchButton = document.getElementById("searchButton")
// const searchTextBox = document.getElementById("searchTextBox")
const dishTypeSelect = document.getElementById("dishTypeSelect")


function getPopularRecipes(showDishes) {
    const mealsUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=837cf79576fa443db6126e8ce01e0c58&query=&number=3&sort=popularity'
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

    const recipesURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=837cf79576fa443db6126e8ce01e0c58"
    fetch(recipesURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        recipesDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })
}
function routeToRecipePage(recipeId) {
    window.location.href="recipePage.html"+`?id=${recipeId}`
    
}

// create a function to display the Popular meals
function displayDishes(Dishes) {
    console.log(Dishes)
    const DishesItems = Dishes.map(function (dish) {
        return `<li>
        <img id = "recipeImage" src=${dish.image}>
        <h3>${dish.title}</h3>
    </li>`
    })
    dishesUL.innerHTML = DishesItems.join("")
}

getPopularRecipes(dishes => {
    displayDishes(dishes)
})