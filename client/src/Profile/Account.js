import React from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function Account({ user, setUser }) {

    function handleLogout(e) {
        e.preventDefault()
        fetch("/logout", {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setUser(null)
            })
    }
    return (
        <>
            <br />
            {user === null ?
                <>
                    <CreateAccount user={user} setUser={setUser} />
                    <p>-or-</p>
                    <Login setUser={setUser}/>
                </>
                :
                <>
                    <h1>{user.username}</h1>
                    <button onClick={e => handleLogout(e)}>Logout</button>
                </>
            }
        </>
    )
}

export default Account;