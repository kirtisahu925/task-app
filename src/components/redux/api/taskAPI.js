let tasks = []; // Simulated tasks data

export const fetchTasks = () => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
};

// Other API functions: createTask, editTask, deleteTask...
