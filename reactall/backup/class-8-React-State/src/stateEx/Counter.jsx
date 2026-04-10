import { useState } from "react";
let Counter= ()=>{
      let [counter,setCounter]=useState(1)
      let incrHandler = ()=>{
        setCounter(counter+1)
      }
      let decrHandler = ()=>{
        setCounter(counter-1)
      }
    return <div>
            <h2>Counter Example</h2>
            <h3>Counter Value:{counter}</h3>

            <button onClick={decrHandler}>-</button>
            {counter}
            <button onClick={incrHandler}>+</button>
        </div>
}
export default Counter;