import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './CounterSlice'

export default configureStore({
  reducer: {
    employee: employeeReducer
  }
})