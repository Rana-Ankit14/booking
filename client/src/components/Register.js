import React from 'react';
import '../CSS/Login.css'
import {NameInput} from "./NameInput";
import {EmailInput} from './EmailInput'
import {PasswordInput} from "./PasswordInput";
import {SubmitButton} from "./SubmitButton";

export const Register = () => {
    return (
        <div className="App">
            <h1>Register</h1>
            <form action="/api/login" method="post">
                <NameInput />
                <EmailInput />
                <PasswordInput />
                <SubmitButton value="Login"/>
            </form>

        </div>
    );
}


