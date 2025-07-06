import { configureStore } from '@reduxjs/toolkit'
import counter from '../store/counter'
export const store = configureStore({
  reducer: {
    counter:counter
  },
})