import { createSlice } from '@reduxjs/toolkit'
//import * as _ from 'lodash'
const initialState = [];

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    pushProjectsList: (state, action) => action.payload,
    cleanProjectsList: () => initialState,
    removeProjectById: (state,action) => {
      const { id } = action.payload;
      return state.filter((project)=> project.id !== id);
    },
    addNewProject: (state, action) => {
      const {project} = action.payload;
      state.push(project);
    }
  },}
)

// Action creators are generated for each case reducer function
export const { pushProjectsList, cleanProjectsList, removeProjectById, addNewProject } = projects.actions;

export const selectProjects = (state) => state.projects;

export default projects.reducer;