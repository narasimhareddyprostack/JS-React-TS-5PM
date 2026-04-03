import CompB from "./Compb";
let CompA=()=>{
    let eid=101;
    let ename="Rahul";
    let avail=true;
    let loc=["Wayanad","Bangalore"]
    
    return <div>
            <h4>Component A</h4>
            <hr/>
            <CompB empId={eid} 
                   message={"GM"} 
                   empName={ename} />
            </div>
}
export default CompA;