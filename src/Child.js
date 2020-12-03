import React from 'react';

function Child(props) {
  return (
    <div>

      Hello World From Child Component<br></br>
      {props.num}
    </div>
  );
}

export default Child;
