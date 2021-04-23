import * as React from 'react';
import {useState} from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';


/**
 * This is a view of all the recipes
 */
export default function RecipeListView(props, {navigation, routes}) {
  const [recipes, searchForRecipe] = useState([])

  const RecipeListing = () => {
    searchForRecipe([ ... recipes, {

      
    }])
  }

    return (
        <View style={styles.container}>

          <SafeAreaView style ={styles.header}>

            <View style ={styles.searchContainer}>
              <SearchBar/> 
            </View>

            <View style ={styles.titleContainer}>
                <Text style ={styles.titleText}>Recipes</Text>

                  <View style ={styles.buttonContainer}> 
                    <TouchableOpacity onPress={() => props.navigation.navigate("view", {screen: "createRecipe"})}>
                      <View style={styles.button}>
                        <Text style ={styles.buttonText}>ADD NEW RECIPE</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
            </View>
          </SafeAreaView>
      

          <ScrollView style ={styles.body}>
            {filterRecipe.map((Recipe) => {
                return (
                  <View key={Recipe.Name}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("view")}>
                      <View style={styles.recipeButton}> 
                        <View style={styles.recipeTextContainer}> 
                          <Text style={styles.recipe}>{Recipe.Name} </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })}
          </ScrollView>
      </View>
    );
}


let helperArray = require( "./RecipeList.json");
let filterRecipe = helperArray;

//Search Bar
const SearchBar = () => {
  return(
    <View style={styles.searchBar} > 
      <TextInput style={styles.searchInput} placeholder ="Search Recipe..." onChangeText={text=>{searchRecipe(text)}}/>
    </View>

  )
}

//Filter function for Search Bar
const searchRecipe = (text) => {
  filterRecipe = helperArray.filter(i => 
    i.Name.includes(text))
    console.log(filterRecipe)
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    header: {
      height: '22%',
      backgroundColor: '#E0884A',
    },

    searchContainer: {
      height: '40%',
      backgroundColor: '#E0884A',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    searchBar: { 
      width: '80%',
      height: '60%',
      backgroundColor: '#FAF5F3',
      borderRadius: 8
    },
    
    searchInput: {
      width: '100%',
      height: '100%',
      paddingLeft: 8,
      fontSize: 16
    },

    titleContainer: {
      height: '60%',
      backgroundColor: '#E0884A',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingLeft: '2%',
      paddingRight: '3%'
      
    },

    titleText: {
      color: '#FAF5F3',
      fontSize: 50,
      fontStyle: 'italic',
    },

    buttonContainer: {
      width: '45%',
      height: '40%',
      borderRadius: 8,
      backgroundColor: '#FAF5F3',
      shadowOffset:{width: 2,  height: 2},
      shadowColor: 'black',
      shadowOpacity: .5,
      marginBottom: '3%'
    },

    button: {
      width: '100%',
      height: '100%',
      marginVertical: '.5%',
      borderRadius: 8,
      backgroundColor: '#FAF5F3',
      alignItems: "center",
      justifyContent: "center"
    },

    buttonText: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      backgroundColor: '#FAF5F3',
      paddingVertical: 5

    },

    body: {
      height: '100%',
      backgroundColor: '#F3DFD6',

    },

    recipeButton: {
      width: '80%',
      height: 100,
      marginVertical: '5%',
      borderRadius: 8,
      marginHorizontal: "10%",
      backgroundColor: '#FAF5F3',
      shadowOffset:{width: 2,  height: 2},
      shadowColor: 'black',
      shadowOpacity: .5,
    },

    recipeTextContainer: {
      width: '100%',
      alignItems: 'center',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#E0884A'
    },

    recipe: {
      fontSize: 26,
      fontStyle: 'italic',
      backgroundColor: '#E0884A',
    }



  });
  
