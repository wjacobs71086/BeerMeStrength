import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'

export const LandingPage = (props) => {
    const [signUp, setSignUp] = useState(false)

    const handleCancel = () => {
        return setSignUp(false)
    }

    return (
        <div className='landing'>
                <LoginForm
                    props={props}
                    signUp={signUp}
                    handleCancel={handleCancel}/>
            <p>To test, use email a@a.com, with password "pass"</p>
            {/* {(!signUp) ? <button className='formButton signupButton' onClick={()=>setSignUp(true)}>Sign Up</button> : null} */}
        </div>
    )
}
