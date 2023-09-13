//Default Themes (Light and Dark)

import { colors} from '../constant';


export const darkMode = {

    theme: 'dark',

    //Drawer Colors//-----------------------
    drawerHeader: '#039fff', //Color for drawer header
    drawerHeaderText: 'white', //Color for drawer header text

    outerContentBackground: '#181818', //Color for drawer Outer content background
    innerContentBackground: '#282828', //Color for drawer inner content background

    inactiveText: 'black', //Color for inactive navigation Text
    activeText: 'white', //Color for active navigation Text

    inactiveBackground: 'white', //Color for inactive navigation Background
    activeBackground: "#1DA1F2", //Color for active navigation Background

    innerBorderColor: '#ebeded', //Color for border
    outerBorderColor: "#181818",

    innerBorderRadius: 8,
    borderBottomWidth: 3,
    borderLeftWidth: 5,


    //Header Menu Colors//-----------------------
    headerBackground: '#1f1f1f', //Color for header background for each page
    titleColor: 'white', //Color for title for each page
    hamburgerIcon: 'white', //Color for hamburger icon
    headerIcon: "#039fff", //Color for header icon

    //Status Bar Colors//-----------------------
    statusBarColor: "black", //Color for status bar
    //------------------------------------

    //page Content Colors//-----------------------
    contentBackground: "black",
    textColor: "white",
    textHighlight: "orange",
    textHighlightBackground: "white",
    borderColor: "white",
    //--------------------------------

    //Drop Down Colors//-----------------------

    //Drop Down Modal Colors//---
    modalHeaderText: "white",
    modalHeaderColor: "#1DA1F2",
    modalBorderColor: "black",
    modalBackground: "#ebeded",
    //-------

    //Drop Down Button Color
    buttonBackground: "white",
    buttonTextColor: "black",
    //----------------

    //Selected Item In Modal----
    selectedItemTextColor: "white",
    selectedItemBackground: "#1DA1F2",
    //------

    //NonSelected Item In Modal---
    itemTextColor: "black",
    nonSelectedItemBackground: "white",
    //------

    //Vertical Table Colors------------------

    verticalTableHeaderCellBackground: colors.lightGrey,
    verticalTableHeaderCellTextColor: 'black',

    
    verticalTableCellBackground: "black",
    tableCellTextColor: "white",

    verticalTableBorderColor: 'white',

    //Horizontal Table Colors------------------
    horizontalTableHeaderBackground: colors.lightGrey,
    horizontalTableHeaderTextColor: "black",
    horizontalTableBorderColor: 'white', 
    
    horizontalTableBackground: 'black',
    horizontalTableTextColor: "white",

    //TwoVariable Table Colors------------------
    twoVarTableHeaderBackground: colors.lightGrey,
    twoVarTableCellTextColor: 'white',
    twoVarTableBorderColor: 'white', 
    twoVarTableBackgroundColor: 'black',
    twoVarTableHeaderTextColor: 'black', 


};

export const lightMode = {
    theme: "light",

    //Drawer Colors//-----------------------
    drawerHeader: '#039fff', //Color for drawer header
    drawerHeaderText: 'white', //Color for drawer header text

    outerContentBackground: '#ebeded', //Color for drawer Outer content background
    innerContentBackground: '#ebeded', //Color for drawer inner content background

    inactiveText: 'black', //Color for inactive navigation Text
    activeText: 'white', //Color for active navigation Text

    inactiveBackground: 'white', //Color for inactive navigation Background
    activeBackground: "#1DA1F2", //Color for active navigation Background

    innerBorderColor: '#ebeded', //Color for border
    outerBorderColor: "#181818",

    innerBorderRadius: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,

    //Header Menu Colors//-----------------------
    headerBackground: '#1f1f1f', //Color for header background for each page
    titleColor: 'white', //Color for title for each page
    hamburgerIcon: 'white', //Color for hamburger icon
    headerIcon: "#039fff", //Color for header icon

    //Status Bar Colors//-----------------------
    statusBarColor: "black", //Color for status bar
    //------------------------------------


    //Content Related Colors//-----------------------
    contentBackground: "white",
    textColor: "black",

    textHighlight: "red",
    textHighlightBackground: "black",

    borderColor: "black",

    //Drop Down Colors//-----------------------

    //Drop Down Modal Colors//---
    modalHeaderText: "white",
    modalHeaderColor: "#1DA1F2",
    modalBorderColor: "black",
    modalBackground: "#ebeded",
    //-------

    //Drop Down Button Color
    buttonBackground: "black",
    buttonTextColor: "white",
    //----------------

    //Selected Item In Modal----
    selectedItemTextColor: "white",
    selectedItemBackground: "#1DA1F2",
    //------

    //NonSelected Item In Modal---
    itemTextColor: "black",
    nonSelectedItemBackground: "white",
    //------   

    //Vertical Table Colors------------------

    verticalTableHeaderCellBackground: colors.lightGrey,
    verticalTableHeaderCellTextColor: 'black',

    
    verticalTableCellBackground: "white",
    tableCellTextColor: "black",

    verticalTableBorderColor: 'black',


    //Horizontal Table Colors------------------
    horizontalTableHeaderBackground: colors.lightGrey,
    horizontalTableTextColor: "black",
    horizontalTableBorderColor: 'black', 
    
    horizontalTableBackground: 'white',
    horizontalTableCellTextColor: "black",

    //TwoVariable Table Colors------------------
    twoVarTableHeaderBackground: colors.lightGrey,
    twoVarTableCellTextColor: 'black',
    twoVarTableBorderColor: 'black', 
    twoVarTableBackgroundColor: 'white',
    twoVarTableHeaderTextColor: 'black', 
};