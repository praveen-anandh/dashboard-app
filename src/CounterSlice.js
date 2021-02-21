import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
      employee:[
        {
            id: 1,
            name: 'praveen',
            salary : 3000
        }
      ],
    value:0  },

  reducers: {
    add: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   console.log(state.value);
    //   console.log(state);
      console.log(action.payload);
      state.employee = [...state.employee,action.payload];
    //   state.employees = [...employees,{
    //     employee_name : "praveen",
    //     id: 4,
    //     employee_Salary : 20000
    //   }, ]
      console.log('test');
    },
  }
})

export const {add} = employeeSlice.actions
export const selectEmployee = state => state.employee.employee;
export default employeeSlice.reducer