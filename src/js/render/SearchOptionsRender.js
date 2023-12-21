import SearchOptions from "../components/SearchOptions/SearchOptions.js";

export default function SearchOptionsRender(recipes) {
    const searchOptionsDOM = document.querySelector('#SearchOptions');

    searchOptionsDOM.appendChild(SearchOptions(recipes));
}
