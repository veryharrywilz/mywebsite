import React, {useState} from "react";

function Login({user, setUser}){

    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const userToLog = {
        username: userName,
        password: passWord
    }


    function handleLogin(e){
        e.preventDefault()
        fetch("/login",{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(userToLog)
        })
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            console.log(data)
        })
    }


    return(
        <>
            <h2>Login</h2>
            <form onSubmit={e => handleLogin(e)}>
                Username <input type="text" onChange={ e => setUserName(e.target.value)} onClick={ e => setUserName(e.target.value)}></input>
                <br/>
                Password <input type="password" onChange={e => setPassWord(e.target.value)} onClick={e => setPassWord(e.target.value)}></input>
                <br />
                <button type="submit">Login</button>
            </form>
        
        
        </>
    )
}

export default Login;