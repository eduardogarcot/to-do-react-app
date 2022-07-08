import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    pushToDo: (state, action) => action.payload,
    cleanToDo: () => initialState,
    pushToDoTask: (state,action) => {
      const {task} = action.payload;
      state.push(task);
    },
    removeToDoTaskById: (state,action) => {
      const { id } = action.payload;
      state= state.filter((task)=> task.id !== id);
    },
    moveTaskTo: (state, action) => {
      const {id, status} = action.payload;
      const index = state.findIndex(task=>id===task.id);
      state[index].status = status;
    },
    }
  },
)

// Action creators are generated for each case reducer function
export const { pushToDo, cleanToDo, pushToDoTask, removeToDoTaskById, moveTaskTo} = toDoListSlice.actions;

export const selectToDoList = (state) => {
  const classifiedTask = {
    TO_DO : [],
    IN_PROGRESS: [],
    DONE: []
  }
  state.toDoList.forEach(item => classifiedTask[item.status].push(item));
  return classifiedTask;
}



export default toDoListSlice.reducer;