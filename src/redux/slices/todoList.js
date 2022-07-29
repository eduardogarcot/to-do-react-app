import { createSlice } from '@reduxjs/toolkit'
import * as _ from 'lodash'
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
      return state.filter((task)=> task.id !== id);
    },
    moveTaskTo: (state, action) => {
      const {id, status} = action.payload;
      const index = state.findIndex(task=>+id===task.id);
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
  Object.keys(classifiedTask).forEach(key=>{
    _.sortBy(classifiedTask[key],(item) => item.labelId);
  })
  return classifiedTask;
}

export const selectAllTask = (state) => state.toDoList;

export default toDoListSlice.reducer;