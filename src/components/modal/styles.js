import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    }
)