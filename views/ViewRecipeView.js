import * as React from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Header, Button, Icon } from "react-native-elements";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

/**
 * This is a view of a specific recipe.
 */
export default function ViewRecipeView(props, {navigation, routes}) {
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
          sectionName: "Tags",
          sectionBody: ["baked goods", "French"]
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
                    <Text style={styles.title}>Recipe Name</Text>
                </View>
            </View>
            <ScrollView style={{height: "100%", marginBottom: "15%"}}>
                    {recipe.map(section => (
                        <View key={section.sectionName} style={{}}>
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
                                <CollapseBody style={{marginBottom: "5%", marginTop: "2%"}}> 
                                    {section.sectionBody.map(text => (
                                        <Text key={text} style={styles.accordionBody}>&#8226;&#160;{text}</Text>
                                    ))}
                                </CollapseBody>
                            </Collapse>
                        </View>
                    ))}
                    
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
      left: "10%",
      paddingTop: "2%",
      paddingBottom: "2%"
    },
    accordionBody: {
      fontSize: 24,
      left: "5%",
      paddingRight: "6%"
    }
  });
  