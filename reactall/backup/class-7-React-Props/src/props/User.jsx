import React from "react";
import Emp from "./Emp";
class User extends React.Component{
    user_Id=101;
    user_Name="Rahul";
    loc=["Wayanad","New Delhi"]

    render(){
        return <div>
                    <h2>User Component</h2>
                    <h5>User Name:{this.user_Name}</h5>
                    <hr/>
                    <Emp uId={this.user_Id} location={this.loc}/>
            
                </div>
    }
}
export default User;