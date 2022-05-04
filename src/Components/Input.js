import React, { useReducer, useEffect ,useState} from 'react';

import './Input.css';


const Input = props => {


    const [currvalid,setcurrvalid] =useState(true)
    const changeHandler=(event,names)=>{
        props.changeHandler(names,event.target.value)
    }
    const touchHandler = () => {
        setcurrvalid(props.onValids)
        
      };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e)=>changeHandler(e,props.name)}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={(e)=>changeHandler(e,props.name)}
        onBlur={touchHandler}
      />
    );

  return (

    <div
      className={`form-controls ${!(currvalid) &&
        'form-controls--invalid'}`}
    
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {(!currvalid) && <p>{props.errorText}</p>}

    </div>
  );
};

export default Input;
