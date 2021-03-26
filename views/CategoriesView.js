import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';

/**
 * This is a view of all the categories
 */
export default function Categories(props, {navigation, routes}) {
  const [recipe, id] = React.useState([
    { name: 'American', key: '1'},
    { name: 'Chinese', key: '2'},
    { name: 'Vegan', key: '3'},
    { name: 'Seafood', key: '4'},
  ]);

  return (
    <View style={styles.container}>

      <SafeAreaView style ={styles.header}>
        <View style ={styles.serachContainer}>
          <SearchBar/> 
        </View>

        <View style ={styles.titleContainer}>
            <Text style ={styles.titleText}>Categories</Text>
            
            <View style ={styles.buttonContainer}> 
             <TouchableOpacity >
               <View style={styles.button}>
                <Text style ={styles.buttonText}>Add New Category</Text>
               </View>

             </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>

      <ScrollView style ={styles.body}>
            {recipe.map((recipe) => {
              return (
                <View key={recipe.key}>
                    <Text style={styles.recipe}>{recipe.name} </Text>
                </View>
              )
            })}
          </ScrollView>

  </View>
  

  
);
}

const SearchBar = () => {
  return(
    <View style={styles.serachbar} > 
      <TextInput style={styles.serachInput} placeholder ="Search Category..." />
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

    serachContainer: {
      height: '40%',
      backgroundColor: '#E0884A',
      justifyContent: 'center',
      alignItems: 'center'
    },

    serachbar: { 
      width: '80%',
      height: '60%',
      backgroundColor: '#FAF5F3',
      borderRadius: 8 
    },
    
    serachInput: {
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
      width: '37.5%',
      aspectRatio: 1,
      marginHorizontal: '10%',
      marginVertical: '5%',
      paddingLeft: '3%',
      borderRadius: 8,
      fontStyle: 'italic',
      backgroundColor: '#FAF5F3'
    }



  });
  
  