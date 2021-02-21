import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import  Form from 'react-bootstrap/Form';
import Chart from './Chart';
import { useSelector, useDispatch } from 'react-redux';
import {add, selectCount} from './CounterSlice';
import Editbox from './Editbox';

const AddEmployee = () =>{
const[edit,setEdit] = useState(false);

const RenderEdit = () => {
    if(edit){
    return <Editbox/>
    }
}

const editBox = () => {
    setEdit(!edit);
}
    return (
        <div>
             <Button variant="outline-dark" onClick = {editBox}>Add Employee</Button>
             {RenderEdit()}
        </div>
    );
}

export default AddEmployee;