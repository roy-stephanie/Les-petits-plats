function RecipeCardContentTitle(title) {
    const divCardContentTitle = document.createElement('div');

    divCardContentTitle.classList.add('RecipeCardContentTitle');
    divCardContentTitle.textContent = title;

    return divCardContentTitle;
}

function RecipeCardContentRecipe(description, maxChars) {
    const divCardContentRecipe = document.createElement('div');
    const divCardContentRecipeHead = document.createElement('div');
    const divCardContentRecipeDescription = document.createElement('div');

    divCardContentRecipeHead.textContent = 'Recette';
    divCardContentRecipe.classList.add('RecipeCardContentRecipe');
    divCardContentRecipeDescription.textContent = description.slice(0, maxChars) + '...';

    divCardContentRecipe.appendChild(divCardContentRecipeHead);
    divCardContentRecipe.appendChild(divCardContentRecipeDescription);

    return divCardContentRecipe;
}


function FormatContentIngredient (ingredients) {
    const listIngredients = [];

    ingredients.forEach((ingredient) => {
        const divContainerIngredient = document.createElement('div');
        const divIngredient = document.createElement('div');
        const divQuantity = document.createElement('div');

        divIngredient.textContent = ingredient.ingredient;
        divIngredient.classList.add('ContentIngredientItem');
        divQuantity.classList.add('ContentIngredientItemQuantity');

        if (ingredient.quantity && !ingredient.unit) {
            divQuantity.textContent = ingredient.quantity;
        } else if (ingredient.quantity && ingredient.unit) {
            divQuantity.textContent = `${ingredient.quantity} ${ingredient.unit}`;
        }

        divContainerIngredient.appendChild(divIngredient);
        divContainerIngredient.appendChild(divQuantity);

        listIngredients.push(divContainerIngredient);
    });

    return listIngredients;
}

function RecipeCardContentIngredient(ingredients) {
    const divCardContentIngredient = document.createElement('div');
    const divCardContentIngredientHead = document.createElement('div');
    const divCardContentIngredientDescription = document.createElement('div');
    const listIngredients = FormatContentIngredient(ingredients);

    divCardContentIngredientHead.textContent = 'Ingrédients';
    divCardContentIngredient.classList.add('RecipeCardContentIngredient');

    divCardContentIngredient.appendChild(divCardContentIngredientHead);
    divCardContentIngredient.appendChild(divCardContentIngredientDescription);

    listIngredients.forEach((ingredientDiv) => {
        divCardContentIngredientDescription.appendChild(ingredientDiv);
    });

    return divCardContentIngredient;
}


export default function RecipeCardContent(recipe) {
    const divCardContent = document.createElement('div');

    divCardContent.classList.add('RecipeCardContent');
    divCardContent.appendChild(RecipeCardContentTitle(recipe.name));
    divCardContent.appendChild(RecipeCardContentRecipe(recipe.description, 190));
    divCardContent.appendChild(RecipeCardContentIngredient(recipe.ingredients));

    return divCardContent;
}
