import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../api/api'; // Correct relative path to the API functions

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksData = await fetchTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    getTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>{task.description}</li>
      ))}
    </ul>
  );
};

export default TaskList;
