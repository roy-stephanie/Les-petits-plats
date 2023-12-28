export default function ExtractArrayToArray(recipes, nameDataExtract, secondNameDataExtract = undefined) {
    const newArray = recipes.map(recipe => {
        let firstProperty = recipe[nameDataExtract];

        if (secondNameDataExtract) {
            return firstProperty.map(ingredient => {
                return ingredient[secondNameDataExtract]
            });
        }
        return firstProperty;
    });

    const flatNewArray = newArray.flat();
    return [...new Set(flatNewArray)];
}
