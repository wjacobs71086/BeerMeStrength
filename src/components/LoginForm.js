import React from 'react'
import { Link } from 'react-router-dom';


export const LoginForm = () => {
    return (
        <div>
            <form>
                <label>Email</label>
                <input type='email'/>
                <label>Password</label>
                <input type='password'/>
                <button>
                    <Link to='/home'>Login</Link>
                </button>
            </form>
        </div>
    )
}

export default LoginForm;
