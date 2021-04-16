import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { Text, View, StyleSheet, TextInput,TouchableOpacity, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Header, Button, Icon } from "react-native-elements";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

/**
 * This is a view to edit a recipe
 */
export default function EditRecipeView(props, {navigation, routes}) {
    const [recipeName, setRecipeName] = useState("Recipe Name")
    const recipe = [
        {
          sectionName: "Ingredients",
          sectionBody: ["bread flour", "yeast", "water", "olive oil", "salt", "milk"]
        }, 
        {
          sectionName: "Steps",
          sectionBody: ["Bloom yeast in warm water for 5 minutes.", 
          "Mix all ingredients in a large bowl.", 
          "Rest dough for 3 hours.", "Preheat oven to 450*F",
          "Place dough in dutch oven and place in oven for 45 minutes."]
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: ["dutch oven", "large bowl"]
        }, 
        {
          sectionName: "Additional Notes",
          sectionBody: ["this bread is cool"]
        }, 
        {
          sectionName: "Images",
          sectionBody: []
        }, 
        {
          sectionName: "Tags",
          sectionBody: ["baked goods", "French"]
        }];

    const addField = () => {

    }

    return (
      <View style={styles.container}>
            <View style={styles.header}>
            <Header 
                    leftComponent= {<IconButton
                        icon="arrow-left"
                        color="white"
                        size={35}
                        onPress={() => props.navigation.navigate("viewRecipe")}
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
                        value={recipeName}
                        placeholder="Enter recipe name"
                        onChange={e => setRecipeName(e.target.value)} //TODO: fix value setting
                    />
                </View>
              <ScrollView style={{height: "20%", paddingBottom: "5%", marginTop: "2%"}}>
                    {recipe.map(section => (
                        <View key={section.sectionName}>
                            <Collapse 
                                style={styles.accordion}
                                isExpanded={true}
                                key={section.sectionName}>
                                <CollapseHeader style={{borderBottomColor: '#CECCCD', borderBottomWidth: 0.5}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={styles.accordionHeader}>{section.sectionName}</Text>
                                        <Icon 
                                          name='arrow-drop-down'
                                          style={{marginTop: '15%', marginRight: '2%'}} 
                                          size={40}
                                        />
                                    </View>
                                </CollapseHeader>
                                <CollapseBody style={{marginTop: "2%"}}>
                                    {section.sectionName == "Steps" ? section.sectionBody.map(text => (
                                        <View key={text} style={{flexDirection: "row", left: "2%"}}>
                                            <Text style={styles.accordionBody}>{section.sectionBody.indexOf(text) + 1}.&#160;</Text>
                                            <TextInput multiline={true} value={text} style={styles.accordionBodyInput}/>
                                        </View>
                                    )) : section.sectionBody.map(text => (
                                      <View key={text} style={{flexDirection: "row", left: "2%"}}>
                                          <Text style={styles.accordionBody}>&#160;&#8226;&#160;</Text>
                                          <TextInput multiline={true} value={text} style={styles.accordionBodyInput}/>
                                      </View>
                                    ))}
                                    <View style={{right: "2%", bottom: "2%", width: "40%", alignSelf: "center"}}>
                                      <View style ={{borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0884A'}}> 
                                        <TouchableOpacity onPress={() => addField(section.sectionName)} >
                                          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', padding: 5}}>
                                              <Text style ={styles.buttonText}>+ Add Field</Text>
                                          </View>
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                </CollapseBody>
                            </Collapse>
                        </View>
                    ))}
              </ScrollView>
            <View style ={styles.footerContainer}>

                <View style ={styles.buttonContainerRed}> 
                  <TouchableOpacity onPress={() => props.navigation.navigate("viewRecipe")} >
                    <View style={styles.button}>
                      <Text style ={styles.buttonText}>Delete Changes</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                
                <View style ={styles.buttonContainerGreen}> 
                 <TouchableOpacity onPress={() => props.navigation.navigate("viewRecipe")} >
                   <View style={styles.button}>
                      <Text style ={styles.buttonText}>Save Changes</Text>
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
      marginBottom: "2%"
    },
    accordionHeader: {
      fontSize: 28,
      fontStyle: 'italic',
      justifyContent: 'center',
      left: "25%",
      paddingTop: "2%",
      paddingBottom: "2%"
    },
    accordionBody: {
      fontSize: 24,
      left: "5%",
      paddingHorizontal: 3, 
      lineHeight: 40,
      marginBottom: 15
    },
    accordionBodyInput: {
      fontSize: 24,
      paddingRight: "6%", 
      lineHeight: 40,
      marginBottom: 15,
      width: '90%',
      left: 3
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
    },
  });
  