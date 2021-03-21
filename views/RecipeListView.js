import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * This is a view of all the recipes
 */
export default function RecipeListView(props, {navigation, routes}) {
    return (
        <View style={styles.container}>
          <Text>Recipe List View</Text>
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
  