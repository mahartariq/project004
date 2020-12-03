import React,{useState} from 'react';
import Parent from './Parent';

function App() {
  let [number , setnumber] = useState(22);
  return (
    <div>
      Hello World From App Component
      <Parent num = {number}/>
      <br></br>
      <button onClick={()=>{setnumber(++number)}}>UPDATE</button>

    </div>
  );
}

export default App;
