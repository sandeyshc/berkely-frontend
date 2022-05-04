import React, { useState, useCallback, useEffect } from 'react';

import { Button,Row,Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import Input from './Components/Input'
import Card from './Components/Card'
import logo from './logo.svg';
import './App.css';

function App() {

  const [formValid,setformValid]=useState(false)
  const [vals, setval]=useState({
    names:{
      values:'',
      isValid: true
    },
    email: {
      values:'',
      isValid: true
    },
    mobile: {
      values:'',
      isValid: true
    },    
    country:{
      values:'',
      isValid: true
    },
    city: {
      values:'',
      isValid: true
    },
    state: {
      values:'',
      isValid: true
    },    
    message: {
      values:'',
      isValid: true
    }
    
    

  })
  useEffect(()=>{
    if(vals.names.values!="" && vals.email.values!="" &&vals.names.isValid && vals.email.isValid && vals.mobile.isValid && vals.country.isValid && vals.city.isValid && vals.state.isValid && vals.message.isValid){
      setformValid(true)
    }
    else{
      setformValid(false)
    }
  },[vals])



  const changeHandler=(name,val)=>{
    // console.log(name,val)
    var letters = /^[A-Za-z]+$/;
    if(name=="names"){
      if(val==''|| !val.match(letters)){
        setval(prevstate=>({...prevstate,names:{values:val,isValid:false}}))
      }
      else {
        setval(prevstate=>({...prevstate,names:{values:val,isValid:true}}))
      }
    }
    else if(name=="email"){
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(val=='' || !val.match(mailformat)){
        setval(prevstate=>({...prevstate,email:{values:val,isValid:false}}))
      }
      else {
        setval(prevstate=>({...prevstate,email:{values:val,isValid:true}}))
      }
    }
    else if(name=="mobile"){
      if(val.length!=10){
        setval(prevstate=>({...prevstate,mobile:{values:val,isValid:false}}))
      }
      else {
        setval(prevstate=>({...prevstate,mobile:{values:val,isValid:true}}))
      }
    }
    else if(name=="message"){
        setval(prevstate=>({...prevstate,message:{values:val,isValid:true}}))
    }
    else{
      var letters = /^[A-Za-z]+$/;
      if(val=='' || val.match(letters)){
        setval(prevstate=>({...prevstate,[name]:{values:val,isValid:true}}))
      }
      else {
        setval(prevstate=>({...prevstate,[name]:{values:val,isValid:false}}))
      }
    }
    
  }
  const submitHandler=()=>{
    if(formValid){
      console.log("Submitted")
    }
  }
  return (
    <React.Fragment>
      <Card>
      <h4 style={{color:'black'}}>Registration Form</h4>
        <Row>
      <Col ><Input
          element="input"
          id="Name"
          type="text"
          label="Name"
          name="names"
          errorText="Please enter a valid Name."
          onValids={vals.names.isValid}
          changeHandler={changeHandler}
        /></Col>
      <Col><Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          name='email'
          errorText="Please enter a valid email address."
          changeHandler={changeHandler}
          onValids={vals.email.isValid}
        />
        </Col>
        </Row>
        <Row>
        <Col><Input
          element="input"
          id="Mobile"
          type="Number"
          label="Mobile"
          name="mobile"
          errorText="Please enter a valid Mobile Number."
          changeHandler={changeHandler}
          onValids={vals.mobile.isValid}
        /></Col>
        <Col><Input
          element="input"
          id="Country"
          type="text"
          label="Country"
          name="country"
          errorText="Please enter a valid Country."
          changeHandler={changeHandler}
          onValids={vals.country.isValid}
        /></Col>
        </Row>
        <Row>
        <Col><Input
          element="input"
          id="City"
          type="text"
          label="City"
          name="city"
          errorText="Please enter a valid City."
          changeHandler={changeHandler}
          onValids={vals.city.isValid}
        /></Col>
        <Col><Input
          element="input"
          id="State"
          type="text"
          label="State"
          name="state"
          errorText="Please enter a valid State."
          changeHandler={changeHandler}
          onValids={vals.state.isValid}
        /></Col></Row><br/>
        <Input
          element="textbox"
          id="Message"
          type="text"
          label="Message"
          name="message"
          errorText="Please enter a valid Message."
          changeHandler={changeHandler}
          onValids={vals.message.isValid}
        /><br/>



      <Button onClick={submitHandler} disabled={!formValid} >Signup</Button>
      </Card>

    </React.Fragment>
  );
}

export default App;
