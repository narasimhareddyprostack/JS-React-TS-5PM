import { useState } from "react";
let Message=()=>{
    //let msg="Hello";
    let [msg,setMsg] = useState("Hello");
    let gmHandler =()=>{
        setMsg("Good Morning")
    }
    let gaHandler = ()=>{
        setMsg("Good Afternoon")
    }
    return <div>
                <h3>Message Component</h3>
                <h3>Message Value:{msg}</h3>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gaHandler}>GA</button>
            </div>
}
export default Message;