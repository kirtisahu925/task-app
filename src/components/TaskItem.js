import React from 'react';

const TaskItem = ({ task }) => {
  const { id, title, description, category, dateLastEdited } = task;

  return (
    <div className="task-item">
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Last Edited: {dateLastEdited}</p>
      {/* Add additional details or actions for tasks */}
    </div>
  );
};

export default TaskItem;
