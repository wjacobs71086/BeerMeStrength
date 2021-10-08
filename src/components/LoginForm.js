import './LoginForm.css'
import React, {useState} from 'react';
import {demoUsers} from '../demo_beer_data';


export const LoginForm = (props) => {
    const [passMatch, setPassMatch] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [emailError, setEmailError] = useState(false)
    
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

const handleSignUp = (ev) => {
    ev.preventDefault()
        const {name, email, age, password, passConfirm} = ev.target
    // {id: 1, name: 'Wesley', age: 36, email: 'a@a.com', password:'pass', active:true}
   let newUser = {'id': Math.ceil(Math.random() * 200), 'name':name.value, 'email':email.value, 'age':age.value, 'password':password.value, beers: [
    {id: 1, name: 'Beak Breaker', by: 'Pelican', type: 'IPA', abv: 9.0, rating: 4, price: '$$', fav: false},
    {id: 2, name: 'Pabst Blue Ribbon', by: 'Pabst', type: 'Pilsner', abv: 4.5, rating: 2, price: '$', fav: true},
    {id: 3, name: 'Pliney the Eldest', by: 'Pliney', type: 'IPA', abv: 7.5, rating: 5, price: '$$$$$', fav: true}
]}
    //console.log('userImportedData', {'name':name.value, 'email':email.value, 'age':age.value, 'password':password.value, 'passConfirm':passConfirm.value})
    demoUsers.push(newUser)
   // props.location.state(newUser.id)
    props.props.history.push('/home', newUser.id)
}



    const handleLogin = (ev) => {
        ev.preventDefault()
        const {name, email, age, password, passConfirm} = ev.target
        
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
                let foundUserID = demoUsers.filter(user => user.email == email.value)[0].id
                
                props.props.history.push('/home', foundUserID)
            } else {
                setEmailError(true)
            }
        }
    }

    const handleFormRender = () => {
        if (props.signUp) {
            return (
                <>
                    {(!passMatch) ? <h2>Passwords must match</h2> : null}
                    {(!validEmail) ? <h2>Please use a valid Email</h2> : null}
                    <form onSubmit={handleSignUp} className='form'>
                        <label className='formLabel'>Name</label>
                            <input className='formInputText' type='text' name='name' required/>
                        <label className='formLabel'>Age</label>
                            <input className='formInputText' type='text' name='age' required/>
                        <label className='formLabel'>Email</label>
                            <input className='formInputText' type='email' name='email' required/>
                        <label className='formLabel'>Password</label>
                            <input className='formInputText' type='password' name='password' required/>
                        <label className='formLabel'>Re-Enter Password</label>
                            <input className='formInputText' type='password' name='passConfirm' required/>
                        <button className='formButton' type='submit'>
                            {/* <Link to='/home'>Submit</Link> */}
                            Submit</button>
                        <button className='formButton' onClick={() => {
                            setPassMatch(true)
                            props.handleCancel()
                        }}>Cancel</button>
                    </form> 
                </>
            )
        } else {
            return (
                <>
                    {(emailError) ? <h3>Unable to Login. Try again.</h3>: null}
                    <form onSubmit={handleLogin} className='form'>
                            <input className='formInputText' type='email' name='email' placeholder='Email'/>
                            <input className='formInputText' type='password' name='password' placeholder='Password'/>
                        <button className='formButton'>
                            Login
                        </button>
                    </form> 
                </>
            )
        }
    }

    return (
        <>
            {handleFormRender()}
        </>
    )
}

export default LoginForm;
