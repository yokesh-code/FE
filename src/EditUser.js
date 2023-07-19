import React, { useEffect, useState } from 'react'

function EditUser(props) {

    const [user,setUser] = useState(props.currentUser)

    const handleChange = (e)=>{
        const {name,value}= e.target;
        setUser({...user, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(user.name && user.gender){
            handleChange(e, props.updateUser(user))
        }
    }

  return (
    <div>
        <h1>Welcome to my First Page</h1>
        <form>
            <div>
                <label>Name</label>
                <input type='text' 
                placeholder='name'
                name="name" 
                value={user.name}
                 onChange={handleChange}/>
            </div>
            <div>
                <label>Gender</label>
                <input type='text'
                  name="gender"
                  value={user.gender} 
                  placeholder='gender'
                  onChange={handleChange}/>
            </div>
            <div>
                <label>Phone no</label>
                <input type='text'  
                name="phoneno" 
                value={user.phoneno} 
                placeholder='phone no' 
                onChange={handleChange}/>
            </div>
            <button className='btn-success' type='submit' onClick={handleSubmit}>Submit User</button>
            <button className='btn-success' type='submit' onClick={()=>props.setEditing(false)}>Cancel User</button>
        </form>
    </div>
  )
}

export default EditUser