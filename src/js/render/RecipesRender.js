import RecipeCard from "../components/RecipeCard/RecipeCard.js";

export default function RecipesRender(recipes) {
    const recipesDOM = document.querySelector('#Recipes');

    return recipes.map((recipe) => {
        recipesDOM.appendChild(RecipeCard(recipe));
    });
}
