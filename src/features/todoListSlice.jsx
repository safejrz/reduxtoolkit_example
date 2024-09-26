import { createSlice } from '@reduxjs/toolkit'

const initialValue = { items : [{ item: 'uno' }, { item: 'dos' }, { item: 'tres' }] }

// const todoItemsSlice = createSlice({
//   name: 'todoItems',
//   initialState: initialValue, 
//   reducers: {
//     add_item: (state, action) => {
//       state.items.push({item: action.payload})
//     },
//     remove_item: (state, action) => {
//       state.items = state.items.filter(i => i.item !== action.payload)
//     }
//   }
// })

// //TODO: Check why state.todoItems.items is undefined. also, uncomment this:
//export const selectItems = state => [] //state.todoItems.items

//export const todoItemsReducer = todoItemsSlice.reducer

//todoItemsReducer
export const todoItemsSlice = createSlice({
  name: "todoItems",
  initialValue,
  reducers: {
    add_item: (state, action) => {
      state.items.push({item: action.payload})
    },
    remove_item: (state, action) => {
      state.items = state.items.filter(i => i.item !== action.payload) 
  }
}
})

export const selectItems = (state) => todoItemsSlice.items

export const { add_item, remove_item } = todoItemsSlice.actions

