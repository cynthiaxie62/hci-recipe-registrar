import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Header, Button } from "react-native-elements";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

/**
 * This is a view to edit a recipe
 */
export default function EditRecipeView(props, {navigation, routes}) {
    const [recipeName, setRecipeName] = useState("Recipe Name")
    var recipe = [
        {
          sectionName: "Ingredients",
          sectionBody: ["flour", "egg", "water", "oil", "<3"]
        }, 
        {
          sectionName: "Steps",
          sectionBody: ["step 1", "step 2", "step 3"]
        }, 
        {
          sectionName: "Kitchen Equipment",
          sectionBody: ["stand mixer", "oven"]
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
          sectionBody: ["baked goods", "italian"]
        }];
    return (
      <View style={styles.container}>
            <View style={styles.headerBar}>
                <Header 
                    style={{flexDirection: "row", color: "#E0884A"}}
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
                <View style={{alignSelf: "center"}}>
                    <TextInput 
                        style={styles.title} 
                        value={recipeName} 
                        onChange={value => setRecipeName(value)} //TODO: fix value setting
                    />
                </View>
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
                                            <TextInput value={text} style={styles.accordionBody}/>
                                        </View>
                                        
                                    ))}
                                </CollapseBody>
                            </Collapse>
                        </View>
                    ))}
                    
                </ScrollView>
            <View style={styles.footerBar}>
                <Header
                    leftComponent={<Button title="Cancel" color="#C32747" />}
                    rightComponent={<Button title="Save" color="green"/>}
                    containerStyle={{
                        backgroundColor: "#F3DFD6",
                        borderBottomColor: "#F3DFD6"
                      }}
                />
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
    headerBar: {
      backgroundColor: "#E0884A",
      flexDirection: "column",
      height: "22%",
      bottom: "2%"
    },
    title: {
      fontSize: 35,
      color: "white",
      borderColor: "black",
      borderWidth: 1,
      padding: 5,
      bottom: "5%"
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
      flexDirection: "row", 
      alignContent: "space-around"
    }
  });
  