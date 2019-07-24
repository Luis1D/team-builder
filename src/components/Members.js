import React, {useState} from 'react';
import MemberList from './MemberList';

const Members = () => {
    const [newMember, setNewMember] = useState({ username: "", email: "", role: "" });
    const listOfUsers = [];

    function handleChange(event) {
        const updatedUser = { ...newMember, [event.target.name]: event.target.value }; 
        setNewMember(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let key;
        for (key in newMember) {
            return (
                <div>
                    { newMember[key] }
                </div>
            )
        }
        console.log("user", newMember);
    }

    return (
        <div className="members">
            <form onSubmit={ handleSubmit }>
                <lable>Members Name:</lable>
                <input type="text" name="username" value={ newMember.username } onChange={ handleChange } placeholder="Name" />
                
                <lable>Email:</lable>
                <input type="Email" name="email" value={ newMember.email } onChange={ handleChange } placeholder="Email" />

                <lable>Role:</lable>
                <input type="text" name="role" value={ newMember.role } onChange={ handleChange } placeholder="Role" />
                
                <button type="submit">Add Member</button>
            </form>
        </div>
    )
}

export default Members;