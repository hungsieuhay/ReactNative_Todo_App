/* eslint-disable jsx-quotes */
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTodoForm } from './TodoForm.hooks';

const TodoForm = ({ formData, onClose }) => {
  const {
    work,
    handleAddNewField,
    handleRemoveField,
    handleChangeTitle,
    handleChangeName,
    handleChangeDescription,
    handleSubmit,
  } = useTodoForm(formData, onClose);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>Add Todo Form</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeTitle}
            placeholder='Title ...'
          />
          {work.map((item, index) => (
            <View key={index} style={styles.inputField}>
              <View>
                <TextInput
                  style={styles.input}
                  value={item.name || ''}
                  onChangeText={(text) => handleChangeName(text, index)}
                  placeholder='Todo name ...'
                />
                <TextInput
                  style={styles.input}
                  value={item.description || ''}
                  onChangeText={(text) => handleChangeDescription(text, index)}
                  placeholder='Description ...'
                />
              </View>
              {index ? (
                <TouchableOpacity onPress={() => handleRemoveField(index)}>
                  <Text style={styles.textRemove}>Remove</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleAddNewField} style={styles.addButton}>
            <Text style={styles.text}>More text field</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    maxHeight: 400,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  inputField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textRemove: {
    fontSize: 16,
    color: '#cf222e',
  },
  text: {
    fontSize: 18,
    color: '#afb8c1',
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginVertical: 6,
    paddingHorizontal: 16,
  },
  addButton: {
    height: 40,
    backgroundColor: '#243A73',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginRight: 5,
    padding: 5,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
