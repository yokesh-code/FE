import { useEffect, useState } from 'react';
import AddUser from './AddUser';
import './App.css';
import userList from './data';
import UserTab from './UserTab';
import EditUser from './EditUser';
import useAsyncRequest from './useAsyncRequest';
function App() {
  const [users,setUsers]=useState(userList)
  //to add new user
  const addUser = (user)=>{
    user.id = user[user.length-1].id+1
    setUsers([...users,user])
  };

  //to delete the selected user
  const deleteUser = (id) => setUsers(users.filter((user)=>user.id!==id));

  const [edit,setEdit] = useState(false);
  const initialUser = {id: null,name:"",gender:"",phoneno:""}
  const [currentUser , setCurrentUser] = useState(initialUser)

  const editUser = (id,user)=>{
    setEdit(true);
    setCurrentUser(user);
  }

  const UpddateUser = (newUser) =>{
    setUsers(
      users.map(user => (user.id === currentUser.id ? newUser:user))
    )
  }
  
  const [data, loading] = useAsyncRequest(3);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: obj.id,
          name: obj.name,
          gender: obj.gender,
          phoneno:obj.phoneno
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          {edit ? (
            <div>
              <h2>Edit user</h2>
              <EditUser
                currentUser={currentUser}
                setEdit={setEdit}
                updateUser={UpddateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        {loading || !users ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View users</h2>
            <UserTab
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
