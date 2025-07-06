import { configureStore } from '@reduxjs/toolkit'
import counter from './addBook'
export const store = configureStore({
  reducer: {
    counter:counter
  },
})