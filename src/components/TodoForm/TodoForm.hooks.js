import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/todoForm/todoFormAction';

export const useTodoForm = (formData, onClose) => {
  const [work, setWork] = useState([{ name: '', description: '', isCompleted: false }]);
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleAddNewField = () => {
    setWork([...work, { name: '', description: '' }]);
  };

  const handleRemoveField = (index) => {
    const newWork = [...work];
    newWork.splice(index, 1);
    setWork(newWork);
  };

  const handleChangeTitle = (text) => {
    setTitle(text);
  };

  const handleChangeName = (text, index) => {
    let newWork = [...work];
    newWork[index].name = text;
    setWork(newWork);
  };

  const handleChangeDescription = (text, index) => {
    let newWork = [...work];
    newWork[index].description = text;
    setWork(newWork);
  };

  const handleSubmit = () => {
    const formValues = {
      id: formData.length + 1,
      title: title,
      work: work,
    };
    dispatch(action.addTodo(formValues));
    onClose();
  };

  return {
    work,
    handleAddNewField,
    handleRemoveField,
    handleChangeTitle,
    handleChangeName,
    handleChangeDescription,
    handleSubmit,
  };
};
