import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { demoUsers } from '../demo_beer_data';


export const LoginForm = (props) => {
    const [passMatch, setPassMatch] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    // Create a function to evaluate that the password is matching both times.
    const checkPasswords = (pass1, pass2) => {
        if (pass1 != pass2) {
            setPassMatch(false)
            return false;
        } else {
            return true
        }
    }

    const checkEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())){
            setValidEmail(false)
            return false;
        } else {
            setValidEmail(true)
            return re.test(String(email).toLowerCase());
        }
       
    }

    const handleLogin = (ev) => {
        ev.preventDefault()
        const {name, email, age, password, passConfirm} = ev.target
        // console.log('what is coming through', {name: name.value, email: email.value, age: age.value, password: password.value, passConfirm: passConfirm.value})
        
        
        // this is the path for the sign-up
        if (props.signUp) {
            if (checkEmail(email.value) && checkPasswords(password.value, passConfirm.value)) {
                // This evaluates that the password is the same and the entered email is valid.
                // This will then make a post call to the API
                
            }
        } else {
            // path for login.
            if (demoUsers.filter(user => user.email == email.value).length == 1) {
                // I've gotta fix this
                console.log('Im here?', props.props.history.push('/home'))
            }
        }
    }

    const handleFormRender = () => {
        if (props.signUp) {
            return (
                <div>
                    {(!passMatch) ? <h2>Passwords must match</h2> : null}
                    {(!validEmail) ? <h2>Please use a valid Email</h2> : null}
                    <form onSubmit={handleLogin}>
                        <label>Name</label>
                            <input type='text' name='name' required/>
                        <label>Age</label>
                            <input type='text' name='age' required/>
                        <label>Email</label>
                            <input type='email' name='email' required/>
                        <label>Password</label>
                            <input type='password' name='password' required/>
                        <label>Re-Enter Password</label>
                            <input type='password' name='passConfirm' required/>
                        <button type='submit'>
                            {/* <Link to='/home'>Submit</Link> */}
                            Submit</button>
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
                    <form onSubmit={handleLogin}>
                        <label>Email</label>
                            <input type='email' name='email'/>
                        <label>Password</label>
                            <input type='password' name='password'/>
                        <button>
                            {/* <Link to='/home'>Submit</Link> */}
                            Submit
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
