import React from 'react'
import UseSignup from './UseSignup'

export default function Signup() {
    const [setEmail,setPassword,doSignupUser] = UseSignup()
    return (
        <div>
            singup
            <input type="text" placeholder="enter user name"  onChange={(e)=> setEmail(e.target.value) }/>
            <input type="password" placeholder="enter your password" onChange={(e)=> setPassword(e.target.value) } />
            <button onClick={doSignupUser}>Submit</button>
        </div>
    )
}
