import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BrowseRecipesContainer from './containers/BrowseRecipesContainer'
import ViewRecipeContainer from './containers/ViewRecipeContainer'
import LinkingConfiguration from './LinkingConfiguration'

export default function App() {
  const [recipes, setRecipes] = useState([
    { recipeName: 'french bread', key: '1', content: [
        {
          sectionName: "Ingredients",
          sectionBody: ["3 cups flour", "1 egg", "1 cup water", "2 tbsp oil"]
        }, 
        {
          sectionName: "Steps",
          sectionBody: ["step 1", "step 2", "step 3"]
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: ["stand mixer", "oven"]
        }, 
        {
          sectionName: "Additional Notes",
          sectionBody: ["this bread is cool"]
        }, 
        {
          sectionName: "Images",
          sectionBody: []
        }, 
        {
          sectionName: "Categories",
          sectionBody: ["baked goods", "French"]
        }]
    },
    { recipeName: 'chicken pot pie', key: '2', content: [
        {
          sectionName: "Ingredients",
          sectionBody: ["1 whole chicken", "1 pie crust"]
        }, 
        {
          sectionName: "Steps",
          sectionBody: ["put chicken in pot", "add pie crust"]
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: ["1 large pot"]
        }, 
        {
          sectionName: "Additional Notes",
          sectionBody: []
        }, 
        {
          sectionName: "Images",
          sectionBody: []
        }, 
        {
          sectionName: "Categories",
          sectionBody: []
        }]
    },
    { recipeName: 'fried rice', key: '3', content: [
        {
          sectionName: "Ingredients",
          sectionBody: ["1 tbsp fries", "3 cups rice"]
        }, 
        {
          sectionName: "Steps",
          sectionBody: []
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: []
        }, 
        {
          sectionName: "Additional Notes",
          sectionBody: []
        }, 
        {
          sectionName: "Images",
          sectionBody: []
        }, 
        {
          sectionName: "Categories",
          sectionBody: []
        }]
    }]);

  const addField = (recipeName, sectionName) => {
    var recipesCopy = recipes;
    recipesCopy.map((recipe) => {
      if (recipe.recipeName == recipeName) {
        recipe.content.map((section) => {
          if (section.sectionName == sectionName) {
            section.sectionBody.push("");
          }
        })
      }
    });
    setRecipes(recipesCopy);
  };
  
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer linking={LinkingConfiguration} mode="modal"> 
      <Stack.Navigator initialRouteName='browse' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='browse' component={BrowseRecipesContainer} recipes={recipes} addField={addField}/>
        <Stack.Screen name='view' component={ViewRecipeContainer} recipes={recipes} addField={addField} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
