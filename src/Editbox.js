import Button from 'react-bootstrap/Button';
import  Form from 'react-bootstrap/Form';
import Chart from './Chart';
import { useSelector, useDispatch } from 'react-redux';
import {add, selectCount} from './CounterSlice';
import { useState } from 'react';


const Editbox  = () => {
    const dispatch = useDispatch();

    const[name,setName] = useState('');
    const[id,setID] = useState('');
    const[salary,setSalary] = useState('');

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleID = (e) =>{
        setID(e.target.value);
    }

    const handleSalary = (e) =>{
        setSalary(e.target.value);
    }

    const AddNewEmployee = () =>{
            console.log('name'+ name);
            console.log('id'+ id);
            console.log('salary'+ salary);
            let newEmployee = {
                id:Number(id),
                salary:Number(salary),
                name:name
            }
            dispatch(add(newEmployee));
    }

    return(
     <div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Name</label>
                <input type="text" className="form-control" id="employeeName"
                 value = {name} aria-describedby="emailHelp"
                 placeholder="Enter Name" onChange = {handleName}/> 
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter ID</label>
                <input type="number" className="form-control" id="employeeID" 
                value = {id}
                 placeholder="Enter ID" onChange = {handleID}/>
            </div>
            <div className="form-check">
                <label htmlFor="exampleInputPassword1">Enter Salary</label>
                <input type="number" className="form-control"
                 value = {salary}   
                 id="employeeSalary" placeholder="Enter salary" onChange = {handleSalary}/>
            </div>
            <Button variant="outline-primary"  onClick = {AddNewEmployee}>Submit </Button>{' '}
    </div>
    )
}

export default Editbox;