import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'

export const LandingPage = () => {
    const [signUp, setSignUp] = useState(false)

    const handleCancel = () => {
        return setSignUp(false)
    }

    return (
        <div>
                <LoginForm
                signUp={signUp}
                handleCancel={handleCancel}/>
            
            {(!signUp) ? <button onClick={()=>setSignUp(true)}>Sign Up</button> : null}
        </div>
    )
}
