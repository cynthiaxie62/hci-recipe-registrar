import * as React from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Header, Button } from "react-native-elements";

/**
 * This is a view of a specific recipe.
 */
export default function ViewRecipeView(props, {navigation, routes}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Header 
                    style={{flexDirection: "row", color: "#E0884A"}}
                    leftComponent= {<IconButton
                        icon="arrow-left"
                        color="white"
                        size={35}
                        onPress={() => console.log('back')}
                    />}
                    rightComponent= {<TouchableOpacity style={{alignSelf: "flex-end", top:"20%", right: "20%"}} onPress={() => console.log("edit")}>
                        <Text style={styles.actionText}>Edit</Text>
                    </TouchableOpacity>}
                    containerStyle={{
                        backgroundColor: "#E0884A",
                        borderBottomColor: "#E0884A"
                      }}
                />
                <View style={{bottom: "5%", left: "7%"}}>
                    <Text style={styles.title}>Recipe Name</Text>
                </View>
            </View>
            <ScrollView>
                <Text>View Recipe View</Text>
            </ScrollView>
          
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3DFD6",
      fontFamily: "PT Serif Caption"
    },
    headerBar: {
      backgroundColor: "#E0884A",
      flexDirection: "column",
      height: "22%"
    },
    title: {
      fontSize: 35,
      color: "white"
    },
    actionText: {
      fontSize: 25,
      color: "white"
    }
  });
  