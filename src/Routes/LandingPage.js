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
            
            {(!signUp) ? <button className='formButton signupButton' onClick={()=>setSignUp(true)}>Sign Up</button> : null}
        </div>
    )
}
