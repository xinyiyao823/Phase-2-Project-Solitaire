import React, { useState } from 'react'

function UserForm({addNewUser}) {
    const [userData, setUserData] = useState({
        username: '',
        score: ''
    })

    function handleOnChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        //POST Request
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(newUserName => addNewUser(newUserName))
        
         setUserData('')

    }

    return (
        <form 
        className="userForm"
        onSubmit={handleSubmit}>
            Please create a username:
            <input
            name="username"
            onChange={handleOnChange}
            value={userData.username}
            /><br/>
            Enter your score:
            <input
            name="score"
            onChange={handleOnChange}
            value={userData.score}
            />
            <input 
            type="submit" 
            value="Enter" 
            className="enter" 
            />
        </form>
    )
}

export default UserForm
