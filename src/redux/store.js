import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './slices/todoList';

export const store = configureStore({
  reducer: {
      toDoList: toDoReducer
    //name : // reducer, 
    //posts: postsReducer,
    //comments: commentsReducer,
    //users: usersReducer,
  },
})
