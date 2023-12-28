import StateOptions from "./StateOptions.js";
import SearchSVG from "./SearchSVG.js";

export default function SearchOptions(title, options) {
    const divOptionsContainer = document.createElement('div');
    const divOptionsSearchContainer = document.createElement('form');
    const divOptionsTitleContainer = document.createElement('div');
    const divOptionsElementsContainer = document.createElement('div');
    const divOptionsTitle = document.createElement('div');
    const divOptionsArrow = document.createElement('img');
    const divOptionsSearchInput = document.createElement('input');
    const divOptionsSearchLabel = document.createElement('label');

    // set Search Title Button Container
    divOptionsTitle.textContent = `${title}`;
    divOptionsArrow.setAttribute('src', './public/img/Arrow.png');
    divOptionsTitle.classList.add('SearchOptionsTitle');
    divOptionsArrow.classList.add('SearchOptionsArrow');
    divOptionsTitleContainer.classList.add('SearchOptionsTitleContainer');
    divOptionsTitleContainer.appendChild(divOptionsTitle);
    divOptionsTitleContainer.appendChild(divOptionsArrow);

    // set Search Title Button
    divOptionsContainer.classList.add('SearchOptions');
    divOptionsContainer.appendChild(divOptionsTitleContainer);

    divOptionsSearchLabel.appendChild(SearchSVG());

    //  set Search Container in divOptionsElementsContainer
    divOptionsSearchInput.setAttribute('id', `search${title}`);
    divOptionsSearchLabel.setAttribute('for', `search${title}`);
    divOptionsSearchInput.setAttribute('type', 'text');
    divOptionsSearchContainer.classList.add('SearchOptionsContainer');
    divOptionsSearchLabel.classList.add('SearchOptionsSearchLabel');
    divOptionsSearchContainer.appendChild(divOptionsSearchInput);
    divOptionsSearchContainer.appendChild(divOptionsSearchLabel);
    divOptionsElementsContainer.appendChild(divOptionsSearchContainer);

    // set All Options in divOptionsElementsContainer
    options.map((option) => {
        const divOptionsElements = document.createElement('div');
        divOptionsElements.textContent = `${option}`;
        divOptionsElements.classList.add('SearchOptionsItem');
        divOptionsElementsContainer.appendChild(divOptionsElements);
    });

    divOptionsElementsContainer.classList.add('SearchOptionsElements');
    divOptionsElementsContainer.classList.add('Hidden');
    divOptionsContainer.appendChild(divOptionsElementsContainer);

    StateOptions(divOptionsTitleContainer, divOptionsElementsContainer);
    return divOptionsContainer;
}
