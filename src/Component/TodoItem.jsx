import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const TodoItem = ({ todo, onUpdate, onToggle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);
  const [expanded, setExpanded] = useState(false);

  const handleUpdate = () => {
    onUpdate(todo.id, updatedTask, updatedDescription);
    setIsEditing(false);
    toast.success('Task Update Successfully');
  };

  return (
    <div className="border p-4 mb-2">
      {isEditing ? (
        <div>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            placeholder="Description"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 ml-2">Update</button>
          <Toaster />
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through' : ''}>{todo.task}</span>
            </div>
            <div>
              <button
                onClick={() => setIsEditing(true)}
                className={`bg-yellow-500 py-2 px-5 text-white font-semibold mr-2 rounded-full shadow-md hover:bg-yellow-700 focus:outline-none ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={todo.completed}
              >
                Edit
              </button>
              <button onClick={() => setExpanded(!expanded)} className="bg-gray-500 py-2 px-5 mr-2 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 focus:outline-none ">Expand</button>
              <button onClick={() => onDelete(todo.id)} className="bg-red-500 py-2 px-5 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none">Delete</button>
            </div>
          </div>
          {expanded && (
            <div className="mt-2">
              <p>Description: {todo.description}</p>
              <p>Last Updated: {todo.updatedAt}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
