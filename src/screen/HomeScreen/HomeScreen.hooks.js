import { useState } from 'react';

export const useHomeScreen = () => {
  const [isAddTodoActive, setIsAddTodoActive] = useState(false);

  const handleOpenAddTodo = () => {
    setIsAddTodoActive(true);
  };
  const handleCloseAddTodo = () => {
    setIsAddTodoActive(false);
  };

  return {
    isAddTodoActive,
    handleOpenAddTodo,
    handleCloseAddTodo,
  };
};
