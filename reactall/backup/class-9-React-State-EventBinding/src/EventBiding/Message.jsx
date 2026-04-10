import { useState } from "react";

let Message=()=>{
    let [msg,setMsg]=useState("Hello")
    let updateHandler=(value)=>{
        setMsg(value);
    }
    return <div>
                <h3>Message Value:{msg}</h3>
                <button onClick={updateHandler.bind(null,"GM")}>GM</button>
                <button onClick={updateHandler.bind(null,"GA")}>GA</button>
                <button onClick={updateHandler.bind(null,"GE")}>GE</button>
                <button onClick={updateHandler.bind(null,"GN")}>GN</button>
            </div>
}
export default Message;