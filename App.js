import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BrowseRecipesContainer from './containers/BrowseRecipesContainer'
import ViewRecipeContainer from './containers/ViewRecipeContainer'
import LinkingConfiguration from './LinkingConfiguration'

export default function App() {
  const [recipes, setRecipes] = useState([
    { recipeName: 'chicken pot pie', key: '1', content: [
        {
          sectionName: "Ingredients",
          sectionBody: ["flour", "egg", "water", "oil", "<3"]
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
          sectionName: "Tags",
          sectionBody: ["baked goods", "italian"]
        }]
    },
    { recipeName: 'beef pot pie', key: '2', content: [
        {
          sectionName: "Ingredients",
          sectionBody: ["beef", "pot", "pie"]
        }, 
        {
          sectionName: "Steps",
          sectionBody: ["put beef in pot", "add pie crust"]
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: ["oven"]
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
          sectionName: "Tags",
          sectionBody: []
        }]
    },
    { recipeName: 'turkey pot pie', key: '3', content: [
        {
          sectionName: "Ingredients",
          sectionBody: ["turkey", "pot", "pie"]
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
          sectionName: "Tags",
          sectionBody: []
        }]
    }]);
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer linking={LinkingConfiguration} mode="modal"> 
      <Stack.Navigator initialRouteName='browse' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='browse' component={BrowseRecipesContainer} recipes={recipes} setRecipes={setRecipes} />
        <Stack.Screen name='view' component={ViewRecipeContainer} recipes={recipes} setRecipes={setRecipes} />
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
