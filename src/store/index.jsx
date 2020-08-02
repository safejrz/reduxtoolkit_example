import { todoItemsReducer } from "../features/todoListSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      todoItems: todoItemsReducer
    }
  })