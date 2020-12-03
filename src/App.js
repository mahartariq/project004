import React,{useReducer, useState} from 'react';
import NumberContext from './NumberContext';
import Parent from './Parent';


function App() {
//  let [number, setnumber] = useState(22);
  let code = useState(11);  
 
return (

    <NumberContext.Provider value={code}>

      <div>
       From App Component
      <Parent/>
      </div>

    </NumberContext.Provider>

  );
}

export default App;
