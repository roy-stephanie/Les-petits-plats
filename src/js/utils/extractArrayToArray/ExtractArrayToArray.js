// This function takes an array of recipes, a property name to extract data (nameDataExtract),
// and an optional second property name (secondNameDataExtract) for nested extraction.
export default function ExtractArrayToArray(recipes, nameDataExtract, secondNameDataExtract = undefined) {
    // Map through the recipes array to extract the specified property.
    const newArray = recipes.map(recipe => {
        // Extract the first property based on the provided nameDataExtract.
        let firstProperty = recipe[nameDataExtract];

        // Check if a second property is specified for nested extraction.
        if (secondNameDataExtract) {
            // If specified, map through the first property to extract the second property.
            return firstProperty.map(ingredient => {
                return ingredient[secondNameDataExtract];
            });
        }
        // If no second property is specified, return the extracted first property directly.
        return firstProperty;
    });

    // Flatten the array of extracted properties.
    const flatNewArray = newArray.flat();

    // Use a set to ensure unique values and return the result.
    return [...new Set(flatNewArray)];
}
