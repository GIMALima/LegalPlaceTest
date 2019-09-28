import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LoginForm from "../layout/LoginForm"
import NavbarComp from '../layout/Navbar'
import Hero from '../layout/Hero'
import { Button, Form, Input, Label, FormGroup} from 'reactstrap';

const defaultState = {
    email: '',
    confirmEmail: '',
    isChecked: false,
    emailError: '',
    confirmEmailError : '',
    confirmError: '',
    checkError: ''
}
export default class Signup extends Component {
    state = defaultState
    handleChange = event => {
        const isChecked = event.target.type === "checkbox"
        this.setState({
            [event.target.name]: isChecked?  event.target.checked:event.target.value
        })
        this.validate()
    }
    validate = () => {
        let isValid = true
        let emailError = ""
        let confirmError = ""
        let confirmEmailError= ""
        if(!this.state.email.includes('@') && this.state.email !== ""){
            emailError = 'This email is invalid'
            isValid = false
        }else if(!this.state.confirmEmail.includes('@') && this.state.confirmEmail !== ""){
            confirmEmailError = 'This email is invalid'
            isValid = false
        }else if(this.state.confirmEmail !== this.state.email  && this.state.confirmEmail !== ''){
            confirmError = "Emails doesn't match"
            isValid = false
        }
        this.setState({emailError, confirmError, confirmEmailError})
        return isValid
    }
    handleSubmit = event =>{
        event.preventDefault()
        let checkError = ''
        if(this.state.isChecked){
            if(this.validate()){
                this.setState(defaultState)
            }     
        }else{
            checkError = "You must agree to the terms of use"
            this.setState({checkError})
        }
    }
    render() {
        return (
        <div>
            <NavbarComp />
            <Hero>
                <LoginForm url='/login' text='I have an account, ' actionText='Login'>
                    <Form className="login-form" onSubmit={this.handleSubmit}>
                        <h1>Signup</h1>
                        <span className="error">{this.state.emailError}</span>   
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            value={this.state.email} 
                            onChange = {this.handleChange}
                            className= {this.state.emailError !== ""? "notValid" : this.state.email !== "" ? "isValid": ""} 
                            required /> 
                        <span className="error">{this.state.confirmEmailError}</span>
                        <span className="error">{this.state.confirmError}</span>
                        <Input 
                            type="email" 
                            placeholder="Confirm email" 
                            name="confirmEmail" 
                            value={this.state.confirmEmail} 
                            onChange={this.handleChange}
                            className= {this.state.confirmError !== ""? "notValid" : this.state.confirmEmail !== "" ? "isValid": ""} 
                            required />
                        <FormGroup check className="checkbox-container">
                            <Label check>
                                <Input 
                                    type="checkbox"
                                    name='isChecked'
                                    checked = {this.isChecked}
                                    onChange={this.handleChange}
                                />
                                I accept the 
                                <Link to="/termuse">
                                    <span style={{color:'#b24966'}}> terms of use</span>
                                </Link>
                            </Label>
                        </FormGroup>
                        <span className="error">{this.state.checkError}</span> 
                        <Button color='primary'>Sign up</Button>
                    </Form>
                </LoginForm>
            </Hero>
        </div>
    )
    }
}
