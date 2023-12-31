import SearchOptions from "../components/SearchOptions/SearchOptions.js";
import ExtractArrayToArray from "../utils/extractArrayToArray/ExtractArrayToArray.js";

export default function SearchOptionsRender(recipes) {
    const searchOptionsDOM = document.querySelector('#SearchOptions');

    const optionsIngredients = ExtractArrayToArray(recipes, 'ingredients', 'ingredient');
    const optionsAppliance = ExtractArrayToArray(recipes, 'appliance');
    const optionsUstensils = ExtractArrayToArray(recipes, 'ustensils');

    searchOptionsDOM.appendChild(SearchOptions('Ingrédients', optionsIngredients));
    searchOptionsDOM.appendChild(SearchOptions('Appareils', optionsAppliance));
    searchOptionsDOM.appendChild(SearchOptions('Ustensiles', optionsUstensils));

    const recipesLength = document.createElement('div');
    recipesLength.classList.add('recipesLength');
    recipesLength.textContent = recipes.length > 1 ? `${recipes.length} recettes` : `${recipes.length} recette`;

    searchOptionsDOM.appendChild(recipesLength);
}
