import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form className='flex gap-1' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done today?"
        className="w-full px-1 py-2 border rounded outline-none border-grey-600"
      />
      {/* <button type="submit">Add</button> */}
      <Button type='submit' className='bg-black px-1 py-2' variant="contained" endIcon={<SendIcon  />}>
    Add
      </Button>
    </form>
  );
};

export default TodoForm;
