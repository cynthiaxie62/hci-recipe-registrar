import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * This is a view of all the categories
 */
export default function Categories(props, {navigation, routes}) {
    return (
        <View style={styles.container}>
          <Text>Categories View</Text>
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
  