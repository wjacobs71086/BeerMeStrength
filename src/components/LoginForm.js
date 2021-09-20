import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


export const LoginForm = (props) => {
    const [passMatch, setPassMatch] = useState(true)



// Create a function to evaluate that the email being entered is a valid email structure and render a warning if not.

// Create a function to evaluate that the password is matching both times.
const checkPasswords = (pass1, pass2) => {
    if (pass1 != pass2) {
        setPassMatch(false)
        return false;
    } else {
        return true
    }
}

const handleLogin = (ev) => {


    ev.preventDefault()
    const {name, email, age, password, passConfirm} = ev.target
    console.log('what is coming through', {name: name.value, email: email.value, age: age.value, password: password.value, passConfirm: passConfirm.value})

    checkPasswords(password.value, passConfirm.value);

}


const handleValidation = (credentials) => {
    console.log('these are the credentials', credentials);
}



const handleFormRender = () => {
    if (props.signUp) {
        return (
            <div>
                {(!passMatch) ? <h2>Passwords must match</h2> : null}
                <form onSubmit={handleLogin}>
                    <label>Name</label>
                    <input type='text' name= 'name'/>
                    <label>Age</label>
                    <input type='text' name='age'/>
                    <label>Email</label>
                    <input type='email' name='email'/>
                    <label>Password</label>
                    <input type='password' name='password'/>
                    <label>Re-Enter Password</label>
                    <input type='password' name='passConfirm'/>
                    <button type='submit'>
                    {/* <Link to='/home'>Submit</Link> */}
                       Submit 
                    </button>
                    <button onClick={() => {
                        setPassMatch(true)
                        props.handleCancel()
                        }}>Cancel</button>
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
