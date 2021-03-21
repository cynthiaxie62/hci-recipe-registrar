import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BrowseRecipesContainer from './containers/BrowseRecipesContainer'
import ViewRecipeContainer from './containers/ViewRecipeContainer'
import LinkingConfiguration from './LinkingConfiguration'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer linking={LinkingConfiguration}> 
      <Stack.Navigator initialRouteName='browse' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='browse' component={BrowseRecipesContainer} />
        <Stack.Screen name='view' component={ViewRecipeContainer} />
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
