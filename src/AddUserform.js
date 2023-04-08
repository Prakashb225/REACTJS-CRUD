import { useState } from "react"

const AddUserform=(props)=>{
    const initialformstate ={id:"",name:"",username:""}
    const [user,setuser]= useState(initialformstate);

    const handleinputChange = (event)=>{
        const {name,value}=event.target;
        setuser({...user,[name]:value});


    }
    return(
        <form onSubmit={
            event =>{
                event.preventDefault()
                if(!user.name || !user.username) return
                props.addUser(user);
                setuser(initialformstate); 
            }

        }>
            <label>Name</label>
            <input type="text" onChange={handleinputChange} name="name" value={user.name} />
            <label>Username</label>
            <input type="text" onChange={handleinputChange} name="username" value={user.username} />
            <button>Add new User</button>

        </form>

    )
}
   


export default AddUserform