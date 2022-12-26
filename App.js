import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);   //sets the current taskItems array as a new array and appends task to it
    setTask(null);                      //empties the text in the text console
  };

  const completeTask = (index) => {
    let newList = [...taskItems];         //creates a new copy list
    newList.splice(index, 1);
    setTaskItems(newList);
  }

  return (
    <View style={styles.container}>
      {/*Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <View style={styles.heading}>
          <Text style={styles.sectionTitle}>Task Manager</Text>
        </View>

        <View style={styles.items}>
          {/*Tasks location*/}

          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item} completeTask={completeTask}/>
            })
          }

        </View>

      </View>

      {/*Get user input */}

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writetasksWrapper}>
        <TextInput style={styles.input} placeholder={'Add a new task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addTask}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#b0cad9',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  },
  items: {
    marginTop: 30,
  },
  writetasksWrapper: {
    position: 'absolute',       //allows me to place it wherever I want to place it
    bottom: 60,                 //pushes it 60 units from the bottom
    // left: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#C0C0C0',
    borderWidth: 2

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  },
  addTask: {},
});
