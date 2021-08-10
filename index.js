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
getPopularRecipe(recipes){
    
}
})




