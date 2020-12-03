import React, { useContext } from 'react';
import NumberContext from './NumberContext';

function Child() {
  let mynumber = useContext(NumberContext);
    return (
    <div>

      {mynumber} From Child Component<br></br>
    

    </div>
  );
}

export default Child;
