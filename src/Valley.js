import React, { useReducer } from 'react';
import firstReducer from './firstReducer';

function Valley() {
    let [state, dispatch] = useReducer(firstReducer, 52)
    return (
        <div>

            Script Valley
            Code Tonight<br></br>
            {state}<br></br>

            <button onClick={()=>{dispatch({type:"INCREMENT"})}}>+</button>
            <button onClick={()=>{dispatch({type:"DECREMENT"})}}>-</button>

        </div>
    );
}

export default Valley;
