import React from 'react';
import NumberContext from './NumberContext';
import Parent from './Parent';

function App() {
//  let [number, setnumber] = useState(22);
  let code = 11;  
return (

    <NumberContext.Provider value={code}>

      <div>
        Hello World From App Component
      <Parent/>
      </div>

    </NumberContext.Provider>

  );
}

export default App;
