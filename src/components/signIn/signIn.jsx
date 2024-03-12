import React from 'react'
import './signIn.scss'

function SignIn() {
  return (
        <div class="login">
            <div class="login-page">
                <div class="heading">
                    <h1>Login</h1>
                </div>

                <div class="login-form">
                    <div class="control-group">
                    <input type="text" class="login-field" value="" placeholder="username" id="login-name"/>
                    <label class="login-field-icon fui-user" for="login-name"></label>
                    </div>

                    <div class="control-group">
                    <input type="password" class="login-field" value="" placeholder="password" id="login-pass"/>
                    <label class="login-field-icon fui-lock" for="login-pass"></label>
                    </div>

                    <a class="btn btn-primary btn-large btn-block" href="#">login</a>
                    <a class="login-link" href="#">Lost your password?</a>
                </div>
            </div>
        </div>
  )
}

export default SignIn
