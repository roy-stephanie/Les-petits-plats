import RecipeCardHeader from "./RecipeCardHeader.js";
import RecipeCardContent from "./RecipeCardContent.js";

export default function RecipeCard(recipe) {
    const divCard = document.createElement('div');
    const divCardContent = document.createElement('div');
    const divCardContentRecipe = document.createElement('div');


    divCard.classList.add('RecipeCard');
    divCardContent.classList.add('RecipeCardContent');
    divCardContentRecipe.classList.add('RecipeCardContentRecipe');

    divCard.appendChild(RecipeCardHeader(recipe));
    divCard.appendChild(RecipeCardContent(recipe));

    return divCard;
}
