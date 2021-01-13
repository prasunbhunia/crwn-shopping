import React from 'react';

import './signin.scss';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/custom-button';
import {SignInWithGoogle} from '../../firebase/firebase';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEvent = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value,  name} = event.target;

        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I have alreay have an Account</h2>
                <span>Sign with Email and Password</span>
                <form onSubmit={this.handleEvent}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='Email' required />
                    <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label='Password' required />
                    <div className="button">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogle>
                            {''}Sign In With Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;