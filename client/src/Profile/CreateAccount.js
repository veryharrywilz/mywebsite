import React, { useState } from "react";

function CreateAccount({user, setUser}) {

    const [newUserName, setNewUserName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const newUser = {
        username: newUserName,
        password: newPassword,
        email: newEmail
    }

    function handleLogin(e) {
        e.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser)
        })
            .then(resp => resp.json())
            .then(data => setUser(data))
        e.target.reset()
    }


    return (
        <>
            <h2>Create Account</h2>
            <form onSubmit={e => handleLogin(e)}>
                Username <input type="text" onChange={e => setNewUserName(e.target.value)}></input>
                <br />
                Password <input type="password" onChange={e => setNewPassword(e.target.value)}></input>
                <br />
                Email <input type="text" onChange={e => setNewEmail(e.target.value)}></input>
                <br/>
                <button type="submit">create account</button>
            </form>
        </>
    )
}

export default CreateAccount;
