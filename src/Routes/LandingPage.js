import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm'


export const LandingPage = () => {
    return (
        <div>
            <LoginForm/>
            <Link to='/sign-up'>Sign Up</Link>
        </div>
    )
}
