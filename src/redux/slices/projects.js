import { createSlice } from '@reduxjs/toolkit'
import * as _ from 'lodash'
const initialState = [];

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    pushProjectsList: (state, action) => action.payload,
    cleanProjectsList: () => initialState,
  },}
)

// Action creators are generated for each case reducer function
export const { pushProjectsList, cleanProjectsList } = projects.actions;

export const selectProjects = (state) => state.projects;

export default projects.reducer;