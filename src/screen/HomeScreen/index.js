import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import TodoForm from '../../components/TodoForm';
import { useHomeScreen } from './HomeScreen.hooks';

export const todoLists = [
  {
    id: 1,
    title: 'Work',
    work: [
      {
        name: 'Pay rent',
        description: 'Home rent to the owner',
        isCompleted: true,
      },
      {
        name: 'Present design to client',
        description: 'Do the client presentation',
        isCompleted: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Health',
    work: [
      {
        name: 'Morning Jogging',
        description: 'Do it slow continuos',
        isCompleted: false,
      },
      {
        name: 'Eat healthy',
        description: 'Eat vegetables and fruit',
        isCompleted: false,
      },
    ],
  },
];
const HomeScreen = ({ navigation }) => {
  const { isAddTodoActive, handleOpenAddTodo, handleCloseAddTodo } = useHomeScreen();
  const { data } = useSelector((state) => state.todoForm);
  const getCompletedTask = (item) => {
    const conmpleteTask = item.filter((task) => task.isCompleted === true);
    const percent = Math.floor((conmpleteTask.length / item.length) * 100);
    return percent;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Hello Ronaldo</Text>
          <Text style={styles.task}>Here are your tasks</Text>
        </View>
        <Image source={require('../../assets/images/ronaldo.png')} style={styles.avatar} />
      </View>
      <Image source={require('../../assets/images/checklist.png')} style={styles.image} />
      <Text style={styles.task}>What do you want to do today?</Text>
      <TouchableOpacity onPress={handleOpenAddTodo}>
        <Text style={[styles.task, styles.underline]}>Tap here to add your tasks</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.todoScroll}>
        <View style={styles.todoLists}>
          {data.map((todo) => (
            <TouchableOpacity
              key={todo.id}
              style={[
                styles.todoItem,
                getCompletedTask(todo.work) === 100 ? styles.todoCompleted : styles.todoPending,
              ]}
              onPress={() => navigation.navigate('Todo Lists', { taskList: todo.work })}
            >
              <Text style={styles.title}>{todo.title}</Text>
              <Text style={styles.task}>{`${todo.work.length} tasks`}</Text>
              <View style={styles.processBar}>
                <View
                  style={[
                    styles.process,
                    {
                      width: getCompletedTask(todo.work) + '%',
                    },
                  ]}
                />
              </View>
              <View style={styles.percent}>
                <Text style={styles.task}>{getCompletedTask(todo.work)}%</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {isAddTodoActive && (
        <Pressable style={styles.layer} onPress={handleCloseAddTodo}>
          <TodoForm formData={data} onClose={handleCloseAddTodo} />
        </Pressable>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#7C3E66',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F6E3C5',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  image: {
    width: 240,
    height: 240,
  },
  todoScroll: {
    marginTop: 40,
  },
  todoLists: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  todoItem: {
    width: 170,
    height: 170,
    margin: 4,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  task: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F2EBE9',
    marginTop: 4,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  layer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: 300,
    height: 600,
    backgroundColor: '#fff',
  },
  processBar: {
    position: 'relative',
    marginTop: 20,
    width: '100%',
    height: 10,
    borderWidth: 1,
    borderColor: '#F2EBE9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  process: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#E8F9FD',
  },
  percent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  todoCompleted: {
    backgroundColor: '#28b351',
  },
  todoPending: {
    backgroundColor: '#A5BECC',
  },
});
