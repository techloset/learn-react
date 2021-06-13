import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Link style={{padding:10}} to="/">LandingPage</Link>
            <Link style={{padding:10}} to="/login">Login</Link>
            <Link style={{padding:10}} to="/signup">SignUp</Link>
            <Link style={{padding:10}} to="/home">Home</Link>
        </div>
    )
}
