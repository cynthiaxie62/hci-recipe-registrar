import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Header, Icon } from "react-native-elements";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Dialog, { DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

/**
 * This is a view of a specific recipe.
 */
export default function ViewRecipeView(props, {navigation, routes}) {
    const [recipeName, setRecipeName] = useState('Recipe Name');
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
          sectionBody: ["dutch oven"]
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
          sectionName: "Categories",
          sectionBody: ["baked goods", "French"]
        }];

    const [confirmVisible, setConfirm] = useState(false);
    const [deleteVisible, setDelete] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Header 
                    style={{flexDirection: "row", color: "#E0884A"}}
                    leftComponent= {<IconButton
                        icon="arrow-left"
                        color="white"
                        size={35}
                        onPress={() => props.navigation.navigate("browse")}
                    />}
                    rightComponent= {<TouchableOpacity 
                        style={{alignSelf: "flex-end", top:"20%", right: "20%"}}
                        onPress={() => props.navigation.navigate("editRecipe")}>
                        <Text style={styles.actionText}>Edit</Text>
                    </TouchableOpacity>}
                    containerStyle={{
                        backgroundColor: "#E0884A",
                        borderBottomColor: "#E0884A"
                      }}
                />
                <View style={{left: "5%"}}>
                    <Text style={styles.title}>{recipeName}</Text>
                </View>
            </View>
            <ScrollView style={{height: "100%", marginBottom: "8%"}}>
                    {recipe.map(section => (
                        <View key={section.sectionName}>
                            <Collapse 
                                style={styles.accordion}
                                isExpanded={true}>
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
                                        <Text key={text} style={styles.accordionBody}>{section.sectionBody.indexOf(text) + 1}.&#160;{text}</Text>
                                    )) : section.sectionBody.map(text => (
                                      <Text key={text} style={styles.accordionBody}>&#8226;&#160;{text}</Text>
                                    ))}
                                </CollapseBody>
                            </Collapse>
                        </View>
                    ))}
                    
            </ScrollView>
            <View style ={styles.footerContainer}>
            <View style ={styles.buttonContainerRed}> 
                  <TouchableOpacity onPress={() => setConfirm(true)} >
                    <View style={styles.button}>
                      <Text style ={styles.buttonText}>Delete Recipe</Text>
                    </View>
                  </TouchableOpacity>
            </View></View>
            <Dialog
              visible={confirmVisible}
              onTouchOutside={() => {
                setConfirm(false);
              }}
              dialogTitle={<DialogTitle 
                title={"Are you sure you want to delete this recipe?"} 
              />}
            >
              <DialogFooter>
                <DialogButton
                  text="CANCEL"
                  onPress={() => {setConfirm(false)}}
                />
                <DialogButton
                  text="DELETE"
                  onPress={() => {setConfirm(false); props.navigation.navigate("browse")}}
                />
              </DialogFooter>
            </Dialog>
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
      color: "white"
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
      paddingRight: "6%", 
      lineHeight: 40,
      marginBottom: 15,
      flexWrap: 'wrap'
    },
    buttonContainerRed: {
      width: '40%',
      height: '60%',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C32747',
      alignSelf: 'center',
      marginBottom: '3%',
      top: -10
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
    footerContainer: {
      height: '8%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }
  });
  