import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

/**
 * This is a container for a recipe's screens
 */
export default function ViewRecipeContainer(props, {navigation, routes}) {
  const Stack = createStackNavigator();
    return (
        <View style={styles.container}>
          <Text>View Recipe Container</Text>
      </View>
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
  