


import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <div className='flex items-center'>
        <span onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
          {todo.title}
        </span>
      </div>
      <div className='ml-auto'>
        <Button variant="outlined" color="error" className='text-red-500 flex items-center space-x-1' onClick={() => deleteTodo(todo.id)} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;

