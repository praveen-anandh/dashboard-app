import React, {useEffect, useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {add, employeeSlice, selectEmployee} from './CounterSlice'

const Table = () =>{
    const employee = useSelector(selectEmployee);
    console.log('Table employee')
    console.log(employee)
  const renderTable = (employee,index) =>{
     return(
        <tr key = {index}>
            <td>{employee.name}</td>
            <td>{employee.salary}</td>
            <td>{employee.id}</td>
        </tr>
     ) }
       return(
       <ReactBootStrap.Table>
            <thead>
                <tr>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
            {employee.map(renderTable)}
            </tbody>
        </ReactBootStrap.Table>
   );
}
export default Table;