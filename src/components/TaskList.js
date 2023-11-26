import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem'; // Assume this component exists

const TaskList = () => {
  const tasks = useSelector(state => state.tasks); // Get tasks from Redux store

  // Check if tasks is not an array
  if (!Array.isArray(tasks)) {
    console.error("Tasks is not an array:", tasks);
    return (
      <div>
        <p>Tasks are not available or in the wrong format.</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
