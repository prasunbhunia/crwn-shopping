import React from 'react';

import SignIn from '../sign-in/signin';
import SignUp from '../sign-up/signup';

import './login.scss';

const SigninSignoutPage = () => (
    <div className="loginpage">
        <SignIn />
        <SignUp />
    </div>
)

export default SigninSignoutPage;