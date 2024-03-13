import React, { useEffect, useState } from 'react'
import './signIn.scss'
import {auth,provider} from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import Dashboard from '../dashboard/dashboard';

function SignIn() {

    const[value,setValue] = useState('')
    const handleClick =() =>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email,data,user.email")
        })

    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
  return (
    <>  
        <div className="login">
            <div className="login-page">
                <div className="heading">
                    <h1>Login</h1>
                </div>

                <div className="login-form">
                    <div className="control-group">
                        <input type="text" className="form-control"      placeholder="username" required=""/>
                    </div>

                    <div className="control-group">
                        <input type="text" className="form-control"  placeholder="password" required=""/>
                    </div>

                    <button type="login" className="btn btn-success">Login</button>
                    <h3>or</h3>
                    {value?<Dashboard/>:
                    <button onClick={handleClick}>SignIn with Google</button>}
                </div>
            </div>
        </div>
    </>
  )
}

export default SignIn
