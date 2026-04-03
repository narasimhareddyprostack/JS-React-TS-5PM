let CompB=(props)=>{
    return <div>
                <h4>Component B</h4>
                <pre>{JSON.stringify(props)}</pre>
                <h4>Employee Name:{props.empName}</h4>
                <h4>Employee Id:{props.empId}</h4>
                <h4>Message:{props.message}</h4>
            </div>
}
export default CompB;