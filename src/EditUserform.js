import { useEffect, useState } from "react"

const EditUserform=(props)=>{
    const [user,setuser]=useState(props.currentUser)
    const handleinputChange = (event)=>{
        const {name,value}=event.target;
        setuser({...user,[name]:value});
    }
    useEffect(()=>{
        setuser(props.currentUser);
    },[props])
    return(
        <form onSubmit={
            event =>{
                event.preventDefault()
                if(!user.name || !user.username) return
                props.updateUser(user.id,user);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleinputChange} name="name" value={user.name} />
            <label>Username</label>
            <input type="text" onChange={handleinputChange} name="username" value={user.username} />
            <button>Update User</button>
            <button className='button muted-button' onClick={()=>{
                props.setediting(false);
            }}>Cancel</button>

        </form>

    )
}
export default EditUserform;

