import React from 'react'

function UserTab(props) {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone No</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user)=>{
                    const {id,name,gender,phoneno} = user;
                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                            <td>{phoneno}</td>
                            <td>
                                <button onClick={()=>props.deleteUser(id)}>DELETE</button>
                                <button onClick={()=>props.editUser(id,user)}>EDIT</button>
                            </td>
                        </tr>
                    );
                    })
                    ):(
                        <tr>
                            <td colspan={3}>NO USER FOUND</td>
                        </tr>
                    )}
        </tbody>
    </table>
  )
            }
export default UserTab