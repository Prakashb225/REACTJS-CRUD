import React, { useEffect, useState } from "react";
import AddUserform from "./AddUserform";
import Usertable from "./Usertable";
import EditUserform from "./EditUserform";


function App() {

 /* const usersData =[
    {id:1,name:'prakash',username:'bprakash'},
    {id:2,name:'gokul',username:'bgokul'},
    {id:3,name:'surendar',username:'gsurendar'}
  ];*/
  const LOCAL_STORAGE_KEY ="users";

  const addUser =(user)=>{
    user.id=users.length+1;
    setusers([...users,user]);
  }
  const deleteUser =(id)=>{
    setusers(users.filter((user)=>user.id!==id));
    setediting(false);
  }

  //const [users,setusers] = useState([]);
  
    const [users, setusers] = useState(() => {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    });
  
  /*useEffect(()=>{
    const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieve) {
      setusers (retrieve);
    }
    
  },[]);*/

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  },[users]); 

  const [editing,setediting] =useState(false);
  const initialformstate ={id:"",name:"",username:""}
  
  const [currentUser,setCurrentUser] =useState(initialformstate);
  const editrow =(user)=>{
    setediting(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});

  }
  const updateUser =(id,updatedUser)=>{
    setediting(false);
    setusers(users.map((user)=>(user.id===id?updatedUser:user)));
  }
  

  return (
    <div className="container">
      <h1>CRUD APP</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing?(
          <div>
            <h2>Edit user</h2>
            <EditUserform
            setediting={setediting}
            currentUser={currentUser}
            updateUser={updateUser} 
            />
            </div>):(
              <div>
                <h2>Add user</h2>
                <AddUserform addUser={addUser}/>
              </div>)}
          </div>
      
        <div className="flex-large">
          <h2>View users</h2>
          <Usertable editrow={editrow} deleteUser={deleteUser} users={users}/>
        </div>
      </div>
      
    </div>
    
  )
};

export default App;
