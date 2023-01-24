import React, { useState} from 'react';
import { Button, Text, TextInput, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import { AddItem } from './components';


const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const onHandlerChange = (text) => {
    setTask(text)
  }
  // console.warn('task', task);
  
  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id;

  const onHandlerCancel = () => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(null)
  }

  const onHandlerDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id))
    setIsModalVisible(!isModalVisible)
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.titleMain}>TASK LIST</Text>
      <AddItem 
        // buttonColor={}
        // buttonText={}
        // onHandlerChange={}
        // onHandlerSubmit={}
        // placeholder={}
        // task={}
        // key={}
      />
     <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='add Task'
        autoComplete='off'
        autoCorrect={false}
        autoCapitalize='none'
        value={task}
        onChangeText={onHandlerChange}
        />
        <Button disabled={!task} title='Add' color='black' onPress={onHandlerSubmit}/>
     </View>
     <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
     /> 
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
    </View>
  );
}


export default App;