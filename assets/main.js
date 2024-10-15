async function getProducts(){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
     const recipes = data.recipes;
     const count = data.count;
     
   document.querySelector(".hh .count").textContent=count;
 const result = recipes.map(function(recipe){
    return `
    <div class="recipe">
    <h2>${recipe.title}<h2>
    <img src= '${recipe.image_url} '/>
    </div>
    `;
}).join('');

document.querySelector(".hh").innerHTML = result;
}

getProducts();
