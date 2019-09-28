import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Button} from 'reactstrap';
import {FaAngleDoubleLeft, FaFacebookSquare, FaGoogle} from 'react-icons/fa'
export default class LoginForm extends Component {
    render() {
        return (
            <div className="form-container">    
                {this.props.children}
                <h6>Or {this.props.actionText} with</h6>
                <Button className="btn-social"><FaFacebookSquare className='social-media' color='#b24966'/>Facebook</Button>
                <Button className="btn-social"><FaGoogle className='social-media'color='#b24966'/>Goolge</Button>
                <NavLink className="nav-link" to={this.props.url} activeClassName="active">
                    {this.props.text}
                    <span style={{color:"#b24966"}}>
                        {this.props.actionText}
                    </span>
                </NavLink> 
            </div>
        )
    }
}
