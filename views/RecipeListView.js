import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';


/**
 * This is a view of all the recipes
 */
export default function RecipeListView(props, {navigation, routes}) {
  const [recipe, id] = React.useState([
    { name: 'chicken pot pie', key: '1'},
    { name: 'beef pot pie', key: '2'},
    { name: 'mcdonalds', key: '3'},
    { name: 'fried rice', key: '4'},
    { name: 'chipotle', key: '5'},
    { name: 'sushi', key: '6'},
    { name: 'water', key: '7'},
    { name: 'cake', key: '8'},
    { name: 'lemon cookies', key: '9'},
    { name: 'chocolate chip cookies', key: '10'},
    { name: 'gummies', key: '11'},
    { name: 'fruit salad', key: '12'},

  ]);
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
                    <Text style ={styles.buttonText}>Add New Recipe</Text>
                   </View>

                 </TouchableOpacity>
                </View>
            </View>
          </SafeAreaView>

          <ScrollView style ={styles.body}>
            {recipe.map((recipe) => {
              return (
                <View key={recipe.key}>
                  <TouchableOpacity onPress={() => props.navigation.navigate("view")}>
                    <Text style={styles.recipe}>{recipe.name} </Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>

      </View>
      

      
    );
}

const SearchBar = () => {
  return(
    <View style={styles.searchBar} > 
      <TextInput style={styles.searchInput} placeholder ="Search Recipe..." />
    </View>

  )
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
      justifyContent: 'center',
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
      width: '35%',
      height: '30%',
      borderRadius: 8,
      backgroundColor: '#FAF5F3',
      marginBottom: '3%'
    },

    button: {
      width: '90%',
      height: '90%',
      marginVertical: '.5%',
      marginHorizontal: '2%',
      backgroundColor: '#FAF5F3',
    },

    buttonText: {
      fontSize: 12,
      color: 'black',
      textAlign: 'left',
      backgroundColor: '#FAF5F3',
      paddingVertical: 5,
      paddingLeft: '2%',
    },

    body: {
      height: '100%',
      backgroundColor: '#F3DFD6',
    },

    recipe: {
      fontSize: 30,
      marginHorizontal: '10%',
      marginVertical: '5%',
      paddingLeft: '3%',
      borderRadius: 8,
      fontStyle: 'italic',
      backgroundColor: '#FAF5F3'
    }



  });
  