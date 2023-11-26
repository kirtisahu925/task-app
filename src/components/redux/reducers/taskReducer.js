const initialState = {
    tasks: [], // initial state for tasks
    // other state properties...
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS':
        return { ...state, tasks: action.payload };
      // other cases...
      default:
        return state;
    }
  };
  
  export default taskReducer;
  