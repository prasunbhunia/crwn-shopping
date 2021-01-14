import React from 'react';

import './signin.scss';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/custom-button';
import { auth, SignInWithGoogle } from '../../firebase/firebase';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEvent = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''})
        }catch(error){
            console.log(error);
        }
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
                    <FormInput name='email' type='email' onChange={this.handleChange} value={this.state.email} label='Email' required />
                    <FormInput name='password' type='password' onChange={this.handleChange} value={this.state.password} label='Password' required />
                    <div className="button">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogle>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;