import * as Linking from 'expo-linking';

/**
 * Works in conjunction with App to handle navigation.
 */
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
        browseRecipesContainer: "browse",
        viewRecipeContainer: "view",
        categoriesView: "categories",
        editRecipeView: "edit",
        recipeListView: "recipeList",
        viewRecipeView: "recipe"
    },
  },
};