import React from 'react';

import './signup.scss';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/custom-button'; 
import { auth, createUserProfileDocumnet } from '../../firebase/firebase';

class SignUp extends React.Component{
    
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleChange = event => {
        const {value,  name} = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmpassword } = this.state;
        if(password !== confirmpassword){
            alert("Password don't match")
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocumnet(user,{ displayName });
            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            }
        }catch(error){
            console.log(error);
        }
    }

    render(){
        const { displayName, email, password, confirmpassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'>I don't have a Account</h2>
                <span>Sign Up with your  Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' onChange={this.handleChange} value={displayName} label='Name' required  />
                    <FormInput name='email' type='email' onChange={this.handleChange} value={email} label='Email' required  />
                    <FormInput name='password' type='password' onChange={this.handleChange} value={password} label='Password' required  />
                    <FormInput name='confirmpassword' type='password' onChange={this.handleChange} value={confirmpassword} label='Confirm Password' required  />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
           
        );
    }
}

export default SignUp;