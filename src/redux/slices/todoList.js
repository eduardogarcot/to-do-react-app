import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    pushToDo: (state, action) => [...state,action.payload],
    clean: () => [],
    pushToDoList: (state, action) => [...state,...action.payload],
    }
  },
)

// Action creators are generated for each case reducer function
export const { pushToDo, clean, pushToDoList} = toDoListSlice.actions;
export const selectToDoList = (state) => state.toDoList;
export default toDoListSlice.reducer;