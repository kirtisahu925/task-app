import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import TaskList from './components/TaskList';
import { fetchTasks } from './components/redux/api/taskAPI'; // import API functions

const App = () => {
  useEffect(() => {
    // Fetch tasks on component mount
    fetchTasks().then(tasks => {
      store.dispatch({ type: 'FETCH_TASKS', payload: tasks });
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
        {/* Other components and routes */}
      </div>
    </Provider>
  );
};

export default App;
