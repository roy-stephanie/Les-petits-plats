import recipes from "../js/recipes/recipes.js";
import RecipesRender from "./render/RecipesRender.js";
import SearchOptionsRender from "./render/SearchOptionsRender.js";

const form = document.querySelector('#Form');

form.addEventListener('click', (e) => {
    e.preventDefault();
});

SearchOptionsRender(recipes);
RecipesRender(recipes);
