import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
      flexDirection: 'row',
      backgroundColor: '#F76D4A',
      width: '100%',
      height: 85,
      paddingLeft: 20,
      marginBottom: 30
    },
  
    headerDark: {
      flexDirection: 'row',
      backgroundColor: 'black',
      width: '100%',
      height: 85,
      paddingLeft: 20,
      marginBottom: 30
    },
  
    hText: {
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
      paddingTop: 40
    },
  
    hTextDark: {
      color: '#F76D4A',
      fontSize: 25,
      fontWeight: 'bold',
      paddingTop: 40
    },
  
    switchImg: {
      marginLeft: 150,
      marginTop: 42,
      marginRight: 20
    },
  
    switch: {
      transform: [{scaleX: 1.5}, {scaleY: 1.5}],
      marginTop: 35
    },
  
    radio: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    radioText: {
      fontSize: 18,
      fontWeight: 'bold'
    },
  
    radioTextDark: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
  
    options: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginBottom: 20
    },
  
    inputView: {
      flexDirection: 'column',
      marginLeft: 80
    },
  
    inputText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5
    },
  
    inputTextDark: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5
    },
  
    numInputText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 20
    },
  
    numInputTextDark: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 20
    },
  
    input: {
      width: 100,
      padding: 5,
      borderWidth:1,
      borderColor: '#F76D4A',
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      fontSize: 20,
      paddingLeft: 10
    },
  
    inputDark: {
      color: 'white',
      width: 100,
      padding: 5,
      borderWidth:1,
      borderColor: '#4AF7BE',
      marginBottom: 10,
      flexDirection: 'column',
      fontSize: 20,
      paddingLeft: 10
    },
  
    resultGood: {
      color: '#4AF7BE',
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 45,
      marginBottom: 30
    },
  
    resultOk: {
      color: '#FFAC00',
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 45,
      marginBottom: 30
    },
  
    resultBad: {
      color: 'red',
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 45,
      marginBottom: 30
    },
  
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 45,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: "#4AF7BE",
    },
  
    buttonDark:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 45,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: "#F76D4A",
    },
  
    buttonText: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white'
    },
  
    container: {
      flex: 1,
      backgroundColor: '#fff5f2',
      alignItems: 'center',
      paddingBottom: 30
    },
  
    containerDark: {
      flex: 1,
      backgroundColor: '#444444',
      alignItems: 'center',
      paddingBottom: 30
    }
  });