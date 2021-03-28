import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesView from '../views/CategoriesView';
import RecipeListView from '../views/RecipeListView';
import { Icon } from 'react-native-elements';

/**
 * This is a container for browsing recipes screens
 */
export default function BrowseRecipesContainer(props, {navigation, routes}) {
  const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
          initialRouteName="Browse"
          tabBarOptions={{          
            activeTintColor: '#1E63E9'
          }}
        >
          <Tab.Screen 
            name="Browse"
            component={RecipeListView} 
            options={{
              tabBarLabel: 'Browse',
              tabBarIcon: ({color}) => (
                <Icon
                name='home'
                color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Categories" 
            component={CategoriesView} 
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({color}) => (
                <Icon
                  name='chat' 
                  color={color}
                />
              ),
            }}
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
  