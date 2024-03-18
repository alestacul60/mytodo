import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      padding: 30,
    },
    title: {
      fontSize: 20,
      color: '#6f6f6f',
    },
    text: {
      fontSize: 16,
      color: '#6f6f6f',
    },
    textDone: {
      fontSize: 16,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
    textoBlanco: {
      fontSize: 16,
      color: '#ffffff',
    },
    textinput: {
      borderColor: '#6f6f6f',
      borderWidth: 1,
      width: Dimensions.get('screen').width * 0.6,
      borderRadius: 15,
      paddingLeft: 15,
    },
    input_container: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addBoton: {
      width: Dimensions.get('screen').width * 0.25,
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    scrollContainer: {
      marginTop: 20,
    },
    itemContainer: {
      paddingVertical: 20,
      borderBottomColor: '#e4e4e4',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    botonElim: {
      width: Dimensions.get('screen').width * 0.25,
      backgroundColor: '#f33d3d',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 15,
    },
  });

  export default styles;