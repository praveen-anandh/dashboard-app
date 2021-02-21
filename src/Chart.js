import { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import {add, employeeSlice, selectEmployee} from './CounterSlice'

const Chart = () => {
    let name = [], salary = [];
    const employee = useSelector(selectEmployee);
    console.log('chart employee')
    console.log(employee);
    for(let i = 0; i < employee.length; i++){
        name.push(employee[i].name);
        salary.push(employee[i].salary);
    }
    console.log('name' +name);
  let myData = {
        labels: name,
        datasets:[
            {
                label: 'salary',
                data:salary
            }
        ]
    };
    
    console.log(myData);
    return (
        <div className = "chart">
         <Bar
            data={myData}
            title="My amazing data"
            color="#70CAD1"
        />
        </div>
    );
}

export default Chart;