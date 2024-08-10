import React, { useState } from 'react';
import TodoList from './TodoList';
import initialTodos from '../data/todos.json';

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);

  const addTask = (task, description) => {
    const newTask = {
      id: Date.now(),
      task,
      description,
      completed: false,
      updatedAt: new Date().toLocaleString(),
    };
    const updatedTodos = [...todos, newTask];
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const updateTask = (id, updatedTask, updatedDescription) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask, description: updatedDescription, updatedAt: new Date().toLocaleString() };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const toggleTask = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed, updatedAt: new Date().toLocaleString() };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const searchTasks = (searchTerm) => {
    const filtered = todos.filter((todo) =>
      todo.task.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <div className="container mx-auto ">
      <TodoList
        todos={filteredTodos}
        onAdd={addTask}
        onUpdate={updateTask}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onSearch={searchTasks}
      />
    </div>
  );
};

export default TodoApp;
