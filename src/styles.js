import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleMain:{
      marginTop: 50,
      fontSize: 20,
      textAlign: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#cbf7ed',
    
    },
    listContainer:{
      marginHorizontal: 20,
      marginTop: 40
    },
    itemContainer:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor:'#626893',
      marginBottom: 10,
      borderRadius: 5
    },
    itemList:{
      fontSize: 16,
      color: '#212121',
      fontWeight: 'bold'
    },
    modalContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      paddingVertical: 20,
    },
    modalTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10 
    },
    modalDetailContainer:{
      paddingVertical: 20,
    },
    modalDetailMessage:{
      fontSize: 16,
  
    },
    selectedTask:{
      fontSize: 16,
      fontWeight: 'bold',
      paddingVertical: 10,
      textAlign: 'center'
    },
    modalButtonContainer: {
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    }
  });