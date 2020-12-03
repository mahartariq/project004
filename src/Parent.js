import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
      Hello World From Parent Component
      <Child num = {props.num}/>
    </div>
  );
}

export default Parent;
