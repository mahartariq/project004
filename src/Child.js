import React, { useContext } from 'react';
import NumberContext from './NumberContext';

function Child() {
  let mynumber = useContext(NumberContext);
    return (
    <div>

      {mynumber[0]} From Child Component<br></br>
    
        <button onClick={()=>{mynumber[1](++mynumber[0])}}>Click Me</button>

    </div>
  );
}

export default Child;
