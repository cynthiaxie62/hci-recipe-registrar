import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * This is a view to edit a recipe
 */
export default function EditRecipeView(props, {navigation, routes}) {
    return (
        <View style={styles.container}>
          <Text>Edit Recipe View</Text>
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
  