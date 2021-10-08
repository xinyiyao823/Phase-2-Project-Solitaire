import React, { useState } from 'react'

function UserForm({addNewUser, score }) {
    const [ submitted, setSubmitted ] = useState(false)
    const [userData, setUserData] = useState({
        username: '',
    })

    function handleOnChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = { ...userData, score: score }
        //POST Request
        if (data.username !== '' && data.score !== 0 && !submitted) {
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(r => r.json())
            .then(newUserName => addNewUser(newUserName))
        }

        
         setUserData('')
         setSubmitted(true)

    }

    return (
        <form 
        className="userForm"
        onSubmit={handleSubmit}>
            <div>
            <p>Username: </p>
            <input
            name="username"
            onChange={handleOnChange}
            value={userData.username}
            />
                </div>
            <div>
            <p>Your Score: </p><span style={{color: "orange", marginLeft: 24}}>{score}</span>
            <input 
            type="submit" 
            value="Submit"  
            className="submit-button"
            />
            </div>

        </form>
    )
}

export default UserForm
