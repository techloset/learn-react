import React from 'react'
import UseLogin from './UseLogin'

export default function Login() {
    const [setEmail,setPassword,doLoginUser] = UseLogin()
    return (
        <div>
            <input type="text" placeholder="enter user name"  onChange={(e)=> setEmail(e.target.value) }/>
            <input type="password" placeholder="enter your password" onChange={(e)=> setPassword(e.target.value) } />
            <button onClick={doLoginUser}>Submit</button>
        </div>
    )
}
