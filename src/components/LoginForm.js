import React from 'react'
import { Link } from 'react-router-dom';


export const LoginForm = (props) => {

const handleFormRender = () => {
    if (props.signUp) {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text'/>
                    <label>Age</label>
                    <input type='text'/>
                    <label>Email</label>
                    <input type='email'/>
                    <label>Password</label>
                    <input type='password'/>
                    <label>Re-Enter Password</label>
                    <input type='password'/>
                    <button>
                        <Link to='/home'>Submit</Link>
                    </button>
                    <button onClick={() => props.handleCancel()}>Cancel</button>
                </form> 
            </div>
        )
    } else {
        return (
            <div>
                <form>
                    <label>Email</label>
                    <input type='email'/>
                    <label>Password</label>
                    <input type='password'/>
                    <button>
                        <Link to='/home'>Submit</Link>
                    </button>
                </form> 
            </div>
        )
    }
}

    return (
        <div>
            {handleFormRender()}
        </div>
    )
}

export default LoginForm;
