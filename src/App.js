import './App.css';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Chart from './Chart';
import { useSelector, useDispatch, Provider } from 'react-redux';
import {add, selectCount} from './CounterSlice'
import Table from './Table';
import AddEmployee from './AddEmployee';
import Editbox from './Editbox';

const App = () =>{
 
  const[showChart,setshowChart] = useState(true);
  const RenderChart = () =>{
    if(showChart){
      return <Chart/>
    }
  }
  const ChangeChart = () =>{
      setshowChart(!showChart);
  }
    const dispatch = useDispatch();

  useEffect(async () => {
    const result = await fetch(
      'https://reqres.in/api/users?page=2',
    )
    const text = await result.text() 
      let employeeList = JSON.parse(text).data;
      console.log(employeeList[0])
      let employee = {
        id : employeeList[0].id,
        name : employeeList[0].first_name,
        salary: 1000
      }
      dispatch(add(employee));
  },[]);
  
  return (
    <div>
      <Button className = "Carat" variant="outline-primary" onClick = {ChangeChart}>
      <p>Show/Hide Chart:
       <i class={showChart? "arrow down" : "arrow up"}></i></p>
       </Button>{' '}
      {RenderChart()}
      <Table/>
      <AddEmployee/>
    </div>
  );
}
export default App;