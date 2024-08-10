import React, { useState } from 'react';
import TodoItem from './TodoItem';
import toast ,{ Toaster } from 'react-hot-toast';


const TodoList = ({ todos, onAdd, onUpdate, onToggle, onDelete, onSearch }) => {
const [newTask, setNewTask] = useState('');
const [newDescription, setNewDescription] = useState('');
const [searchTerm, setSearchTerm] = useState('');

const handleAdd = () => {
    if (newTask.trim() === '') {
        toast.error('Task cannot be empty');
        return;
      }
onAdd(newTask, newDescription);
setNewTask('');
setNewDescription('');
};

return (
<div className="p-4">
<div className="mb-4">
<input
    type="text"
    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    placeholder="Add new task..."
    value={newTask}
        onChange={(e) => setNewTask(e.target.value)
    
            }
/>
<input
    type="text"
    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    placeholder="Add description..."
    value={newDescription}
    onChange={(e) => setNewDescription(e.target.value)}
/>
<button onClick={handleAdd} className="mt-2 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">Add Task</button>
<Toaster />
        </div>
    <div className="mb-4">
    
<input
    type="text"
    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    placeholder="Search tasks..."
    value={searchTerm}
    onChange={(e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
    }}
/>
</div>
{todos.map((todo) => (
<TodoItem
    key={todo.id}
    todo={todo}
    onUpdate={onUpdate}
    onToggle={onToggle}
    onDelete={onDelete}
/>
))}
</div>
);
};

export default TodoList;
