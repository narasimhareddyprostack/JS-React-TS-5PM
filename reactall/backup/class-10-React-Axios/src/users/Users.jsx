import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const Users = () => {
    let [users,setUsers]=useState([])

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{setUsers(resp.data)})
        .catch((err)=>{console.log(err.msg)})
    },[]);
    
    return <div>
                <h3>Users Component</h3>
                <pre>{JSON.stringify(users)}</pre>
                {
                    users.length>0?
                    <>
                    <table border={3}>
                    <thead>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </thead>
                    <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address.city}</td>
                                   </tr>
                        })
                    }
                    </tbody>
                    </table>
                    </>:<>No Data</>
                }
            </div>
}

export default Users