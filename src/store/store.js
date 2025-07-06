import { configureStore } from '@reduxjs/toolkit'
import addbook from './addBook'
export const store = configureStore({
  reducer: {
    addbook:addbook
  },
})