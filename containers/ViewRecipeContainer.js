import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ViewRecipeView from '../views/ViewRecipeView'
import EditRecipeView from '../views/EditRecipeView'
import CreateRecipeView from '../views/CreateRecipeView';

/**
 * This is a container for a recipe's screens
 */
export default function ViewRecipeContainer(props, {navigation, routes}) {
  const Stack = createStackNavigator()

  return (
          <Stack.Navigator initialRouteName='viewRecipe' screenOptions={{ headerShown: false }}>
              <Stack.Screen name='viewRecipe' component={ViewRecipeView}/>
              <Stack.Screen name='editRecipe' component={EditRecipeView}/>
              <Stack.Screen name='createRecipe' component={CreateRecipeView}/>
          </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  