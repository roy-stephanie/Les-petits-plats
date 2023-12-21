function RecipeTime(time) {
    const divTime = document.createElement('div');

    divTime.classList.add('RecipeTime');
    divTime.textContent = `${time}min`;

    return divTime;
}

export default function RecipeCardHeader(recipe) {
    const divCardHeader = document.createElement('div');
    const imgCardHeader = document.createElement('img');

    imgCardHeader.src = `public/img/recipes/${recipe.image}`;
    imgCardHeader.alt = recipe.name;

    divCardHeader.classList.add('RecipeCardHeader');
    divCardHeader.appendChild(RecipeTime(recipe.time));
    divCardHeader.appendChild(imgCardHeader);

    return divCardHeader;
}
