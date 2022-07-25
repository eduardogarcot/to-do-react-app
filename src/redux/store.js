import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './slices/todoList';
import isLoggedReducer from './slices/isLogged';
import projectsReducer from './slices/projects';

export const store = configureStore({
  reducer: {
      toDoList: toDoReducer,
      isLogged: isLoggedReducer,
      projects : projectsReducer, 
    //posts: postsReducer,
    //comments: commentsReducer,
    //users: usersReducer,
  },
})
