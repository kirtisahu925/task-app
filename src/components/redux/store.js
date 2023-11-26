import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer';
import categoryReducer from './reducers/categoryReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  categories: categoryReducer,
  // other reducers...
});

const store = createStore(rootReducer);

export default store;
