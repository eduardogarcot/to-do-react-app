import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './slices/todoList';
import isLoggedReducer from './slices/isLogged';

export const store = configureStore({
  reducer: {
      toDoList: toDoReducer,
      isLogged: isLoggedReducer,
    //name : // reducer, 
    //posts: postsReducer,
    //comments: commentsReducer,
    //users: usersReducer,
  },
})
