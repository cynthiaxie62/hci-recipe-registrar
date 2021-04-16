import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesView from '../views/CategoriesView';
import RecipeListView from '../views/RecipeListView';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

/**
 * This is a container for browsing recipes screens
 */
export default function BrowseRecipesContainer(props, {navigation, routes}) {
  const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
          initialRouteName="Browse"
          tabBarOptions={{          
            activeTintColor: '#E0884A',
            labelStyle: {
              fontSize: 15,
            },
          }}
        >
          <Tab.Screen 
            name="Browse"
            component={RecipeListView} 
            options={{
              tabBarLabel: 'Recipes',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="food" size={24} color={color} />
              ),
            }}
            initialParams={{recipes: props.recipes, addField: props.addField}}
          />
          <Tab.Screen
            name="Categories" 
            component={CategoriesView} 
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="layer-group" size={24} color={color} />
              ),
            }}
            initialParams={{recipes: props.recipes, addField: props.addField}}
          />
        </Tab.Navigator>
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
  