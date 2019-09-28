import React, { Component } from 'react'
import { Button, Form, Input} from 'reactstrap';
import NavbarComp from '../layout/Navbar'
import Hero from '../layout/Hero'
import LoginForm from '../layout/LoginForm'
const defaultState = {
    email:"",
    emailError:"",
}
export default class Login extends Component {
    state = defaultState
    validate = () => {
        let isValid =  true
        let emailError = ""
        let passwordError = ""
        if(!this.state.email.includes("@")){
            emailError = "This email is invalid"
            isValid = false
        }else{
            this.setState({emailError: ""})
        }
        this.setState({emailError, passwordError})
        return isValid
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.validate()
    }
    handleSubmit = event => {
        event.preventDefault()
        if(this.validate()){
            this.setState(defaultState)
        }
    }
    render() {
        return (
            <div>
            <NavbarComp />
                <Hero>
                    <LoginForm url='/signup' text="Don't have an account? " actionText='Sign up' margin='60px'>
                        <Form className="login-form" onSubmit={this.handleSubmit}>
                            <h1>Login</h1>    
                                <Input    
                                    type="email" 
                                    placeholder="Email" 
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className= {this.state.emailError !== ""? "notValid" : this.state.email !== "" ? "isValid": ""} 
                                    required/>
                                <span className="error">{this.state.emailError}</span>                       
                            <Button color='primary'>Login</Button>
                        </Form>
                    </LoginForm>
                </Hero>
            </div>          
        )
    }
}
