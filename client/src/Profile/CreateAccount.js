import React, { useState } from "react";

function CreateAccount({ user, setUser }) {

    const [newUserName, setNewUserName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [createAccountError, setCreateAccountError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


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
            .then(resp => {
                
                if (resp.ok) {
                    resp.json()
                        .then(data => setUser(data))
                    e.target.reset()
                } else {
                    resp.json()
                        .then(data => {
                            console.log(data.errors[0])
                            setErrorMessage(data.errors[0])
                            setCreateAccountError(true)
                        })
                }
            })
    }

  


    return (
        <>
            <h2>Create Account</h2>
            {
                createAccountError ?  <p className="errorMessage">{errorMessage}</p>  : null
            }
            <form onSubmit={e => handleLogin(e)}>
                Username <input type="text" onChange={e => setNewUserName(e.target.value)}></input>
                <br />
                Password <input type="password" onChange={e => setNewPassword(e.target.value)}></input>
                <br />
                Email <input type="text" onChange={e => setNewEmail(e.target.value)}></input>
                <br />
                <button type="submit">create account</button>
            </form>
        </>
    )
}

export default CreateAccount;
