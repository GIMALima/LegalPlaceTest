import React, { Component } from 'react'
import {NavLink, Link} from "react-router-dom"
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav} from 'reactstrap';

export default class NavbarComp extends Component {
    state = {
        isOpen: false,
        dropdownOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    handleDropDownOpen = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }
    render() {
        return (
            <header className="fixed">
            <Navbar className="shadow bg-white" color="faded" light expand="md">
                <NavbarBrand  href="/home">
                    <img src="#" alt="TODO" />
                </NavbarBrand>
                <NavbarToggler onClick={this.handleToggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto cont" navbar>
                        <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                        <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                        <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>   
                    </Nav>
                    <NavLink className="nav-link login" to="/signup">Sign up</NavLink>
                    <Button className="login" color="primary"><Link className="log-in" to="/login">Log in</Link></Button>	
                </Collapse>
            </Navbar>      
        </header>
        )
    }
}
