import React, {Component} from 'react'
import {NavLink} from "react-router-dom"
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {FaRegSun, FaPlus} from 'react-icons/fa'
export default class CostumNav extends Component {
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
    render(){
    return (
        <header className="fixed">
                <Navbar className="shadow customnav" color="faded" light expand="md">
                    <NavbarBrand  href="/home">
                        <img src='#' alt="TODO" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.handleToggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Button color="link"><FaPlus color='#fff'/></Button>	
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.handleDropDownOpen}>
                                <DropdownToggle className="nav-link" nav caret>
                                <FaRegSun color="#fff"/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/categories" activeClassName="active">
                                            Logout
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/trending" activeClassName="active">
                                            Settings
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </Nav>
                    </Collapse>
                </Navbar>      
            </header>
    )
    }
}

