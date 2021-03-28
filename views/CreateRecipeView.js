import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Header, Button } from "react-native-elements";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

/**
 * This is a view to create a recipe
 */
export default function CreateRecipeView(props, {navigation, routes}) {
    const [recipeName, setRecipeName] = useState("")
    var recipe = [
        {
          sectionName: "Ingredients",
          sectionBody: [""]
        }, 
        {
          sectionName: "Steps",
          sectionBody: [""]
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: [""]
        }, 
        {
          sectionName: "Additional Notes",
          sectionBody: [""]
        }, 
        {
          sectionName: "Images",
          sectionBody: [""]
        }, 
        {
          sectionName: "Tags",
          sectionBody: [""]
        }];
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <Header 
                    style={{flexDirection: "row", color: "#E0884A"}}
                    leftComponent= {<IconButton
                        icon="arrow-left"
                        color="white"
                        size={35}
                        onPress={() => props.navigation.navigate("browse")}
                    />}
                    containerStyle={{
                        backgroundColor: "#E0884A",
                        borderBottomColor: "#E0884A"
                      }}
                />
            </View>
            <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#E0884A"}}>
                  <TextInput 
                        style={styles.title} 
                        placeholder="Enter recipe name"
                        onChange={value => setRecipeName(value)} //TODO: fix value setting
                    />
                </View>
                <ScrollView style={{height: "100%", marginBottom: "2%"}}>
                    {recipe.map(section => (
                        <View key={section.sectionName} style={{top: "2%"}}>
                            <Collapse 
                                style={styles.accordion}
                                isCollapsed={true}
                                key={section.sectionName}>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.accordionHeader}>{section.sectionName}</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    {section.sectionBody.map(text => (
                                        <View key={text} style={{flexDirection: "row", left: "6%"}}>
                                            <Text style={styles.accordionBody}>&#160;&#8226;&#160;</Text>
                                            <TextInput placeholder="Type here" style={styles.accordionBody}/>
                                        </View>
                                        
                                    ))}
                                </CollapseBody>
                            </Collapse>
                        </View>
                    ))}
                    
                </ScrollView>
            <View style ={styles.footerContainer}>

                <View style ={styles.buttonContainerRed}> 
                  <TouchableOpacity onPress={() => props.navigation.navigate("browse")} >
                    <View style={styles.button}>
                      <Text style ={styles.buttonText}>Delete Recipe</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                
                <View style ={styles.buttonContainerGreen}> 
                 <TouchableOpacity onPress={() => props.navigation.navigate("viewRecipe")} >
                   <View style={styles.button}>
                      <Text style ={styles.buttonText}>Create Recipe</Text>
                   </View>
                 </TouchableOpacity>
                </View>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3DFD6",
      fontFamily: "PT Serif Caption"
    },
    header: {
      backgroundColor: "#E0884A",
      flexDirection: "column",
      height: "15%"
    },
    title: {
      fontSize: 35,
      color: "white",
      borderColor: "black",
      borderWidth: 1,
      padding: "2%",
      marginBottom: "2%"
    },
    actionText: {
      fontSize: 25,
      color: "white"
    },
    accordion: {
      backgroundColor: "#FAF5F3", 
      width: "80%", 
      alignSelf: "center",
      marginBottom: "5%"
    },
    accordionHeader: {
      fontSize: 28,
      top: "5%",
      left: "3%",
      bottom: "5%"
    },
    accordionBody: {
      fontSize: 24,
      left: "6%",
    },
    footerBar: {
      height: "8%",
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },

    footerContainer: {
      height: '8%',
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    buttonContainerRed: {
      width: '40%',
      height: '60%',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C32747',
    },

    buttonContainerGreen: {
      width: '40%',
      height: '60%',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3B804C',
    },

    button: {
      width: '90%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },

    buttonText: {
      fontSize: 18,
      color: '#FAF5F3',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }
  });
  