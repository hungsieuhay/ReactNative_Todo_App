import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const TodoScreen = ({ route }) => {
  const { taskList } = route.params;
  const [tasks, setTasks] = useState(taskList);

  const handleTaskList = (task, index) => {
    const newTaskLists = [...tasks];

    const newTask = {
      ...newTaskLists[index],
      isCompleted: newTaskLists[index].isCompleted === false ? true : true,
    };
    newTaskLists[index] = newTask;
    setTasks(newTaskLists);
  };

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index.toString()} style={styles.task}>
          <Image source={require('../../assets/images/tasks.png')} />
          <View style={styles.taskInfo}>
            <Text style={styles.taskName}>{task.name}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
          </View>
          <TouchableOpacity onPress={() => handleTaskList(task, index)}>
            {task.isCompleted ? (
              <Image source={require('../../assets/images/completed.png')} />
            ) : (
              <Image source={require('../../assets/images/time.png')} />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  task: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  taskInfo: {
    width: '70%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  taskName: {
    fontSize: 18,
    color: '#243A73',
  },
  taskDescription: {
    fontSize: 16,
    color: '#A5BECC',
  },
});
