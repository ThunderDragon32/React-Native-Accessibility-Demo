import React, { useRef, useContext, useState } from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import { useFocusEffect, useNavigation} from '@react-navigation/native';

//Custom Imports
//============================================================================
import {colors, def_App } from '../../constant'
import {resetScroll, accessibilityFocus} from '../../functions/accessibility_functions'
import HorizontalLine from '../../components/basic_components/HorizontalLine';
import Checkbox from '../../components/basic_components/Checkbox';
import {heading} from '../../components/headings';
import NextPageButton from '../../components/NextPageButton';
import PreviousPageButton from '../../components/PreviousPageButton';
//============================================================================

//Theme Management Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================

//Check Box Data
//================================================================
const data = [
  'Apple',
  'Orange',
  'Banana',
  'Grapefruit',
];
//================================================================

function CheckboxExample() {

  const [value, setValue] = useState(null);

  const handleChange = (value) => {
    setValue(value);
  }

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  const navigation = useNavigation()

  const nextButtonPress = () => {
    navigation.navigate(def_App.commonLabel, {
      screen: 'Accordion',
    })  
  }

  //When the page loads (everytime) the useFocusEffect is triggered
  useFocusEffect(
    React.useCallback(() => {
      resetScroll(scrollViewRef);
      accessibilityFocus(firstElementRef, 250);
    }, [])
  )

  return (

    <ScrollView
      ref={scrollViewRef}
      keyboardDismissMode='on-drag' 
      pagingEnabled="false" 
      style={[styles.container, { backgroundColor: theme.page.contentBackground }]}
    >

      <View>
        {/* // heading.Heading is a custom heading style set in constant.js */}
        {/* //first Element set here -------------------------------------------*/}

        <View style={styles.containerHeader}>
          <heading.Heading1 //Heading 1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Check Box Example"
          >
            Check Box Example
          </heading.Heading1>
        </View>

        <View>
          <Checkbox
            title={"Select a item"}
            data={data}
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <PreviousPageButton PageName="Accordion" />
          <NextPageButton PageName="ComboBox" />
        </View>
      </View>

    </ScrollView>



  );
}

const styles = StyleSheet.create({
  //Header Styles relating to "Example Components"
  //================================================
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
  },
  containerHeaderText: {
    color: "white",
  },
  //================================================

  //General Styles
  //================================================ 
  textContent: {        //This style is general text style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  heading2: {        //Heading 2 style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  heading3: {        //Heading 3 style
    paddingTop: 1,
    paddingBottom: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //================================================

  


});

export default CheckboxExample;
