import React, { useState } from 'react';
// use - they will start with use 
// component name must be uppercase 
// must be in the function/component body 
// cannot call conditionally
const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handeler = useState(1)[1];
  // console.log(value,handeler);
  const [text,setText] = useState('random title');
  const handleClick = () =>{
    if(text==='random title'){
      setText('hello world');
    }else{
      setText('random title');
    }
  }
  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
  );
};

export default UseStateBasics;
