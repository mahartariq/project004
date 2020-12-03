import React from 'react';
import Child from './Child';
import Valley from './Valley';

function Parent(props) {
  return (
    <div>
      Hello World From Parent Component
      <Child num = {props.num}/>
    <br></br>
    <Valley/>
    </div>
  );
}

export default Parent;
