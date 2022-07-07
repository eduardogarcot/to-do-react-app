import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  TO_DO : [],
  IN_PROGRESS: [],
  DONE: []
};

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    pushToDo: (state, action) => action.payload,
    cleanToDo: () => initialState,
    pushToDoTask: (state,action) => {
      const {status, task} = action.payload;
      state[status].push(task);
    },
    removeToDoTaskById: (state,action) => {
      const {status, id} = action.payload;
      state[status] = state[status].filter((task)=> task.id !== id);
    }
    }
  },
)

// Action creators are generated for each case reducer function
export const { pushToDo, cleanToDo, pushToDoTask, removeToDoTaskById} = toDoListSlice.actions;
export const selectToDoList = (state) => state.toDoList;
export default toDoListSlice.reducer;