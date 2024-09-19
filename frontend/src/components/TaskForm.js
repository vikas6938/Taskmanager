import React, { useState } from 'react';
import { createTask } from '../api/api'; // Correct relative path to the API functions

const TaskForm = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ description, category });
      alert('Task created successfully');
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
