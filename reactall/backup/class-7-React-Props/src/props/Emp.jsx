import React from "react";

class Emp extends React.Component{
    render(){
        return <div>
                    <h2>Emp Component</h2>
                    <pre>{JSON.stringify(this.props)}</pre>
                    <h3>Emp Id:{this.props.uId}</h3>
                </div>
    }
}

export default Emp;