import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandlerCancel, onHandlerDelete}) => {
    return(
        <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
        <View style={styles.modalButtonContainer}>
          <Button
          title='Cancel'
          color='#636893'
          onPress= {onHandlerCancel}
          />
          <Button
          title='Delete'
          color= '#636893'
          onPress= {onHandlerDelete}
          />
        </View>
        </View>
        </Modal>
    )
}

export default CustomModal