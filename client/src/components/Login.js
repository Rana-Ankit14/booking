import React from 'react';
import '../CSS/Login.css'
import {EmailInput} from './EmailInput'
import {PasswordInput} from "./PasswordInput";
import {SubmitButton} from "./SubmitButton";

export const Login = () => {
    return (
        <div className="App">
            <h1>Login</h1>
            <form action="/api/login" method="post">
                <EmailInput />
                <PasswordInput />
                <SubmitButton value="Login"/>
            </form>

        </div>
    );
}


