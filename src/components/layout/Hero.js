import React from 'react';
import {NavLink} from "react-router-dom"
import { FaPinterestP,FaFacebookF, FaInstagram, FaTwitter,FaRegCalendarAlt } from 'react-icons/fa';
import {Row, Col, Jumbotron, Container} from 'reactstrap'


export default class Hero extends React.Component {
  render() {
    return (
    <section className="hero">
                <div className="hero-social-links">
                    <NavLink to=""><FaInstagram size="1.5em"/></NavLink>
                    <NavLink to=""><FaFacebookF size="1.5em"/></NavLink>
                    <NavLink to=""><FaTwitter size="1.5em"/></NavLink>
                    <NavLink to=""><FaPinterestP size="1.5em"/></NavLink>
                </div>
                <Row>
                    <Col className="background1">
                        <h1>My Tasks</h1>
                        <Jumbotron fluid>
                            <Container fluid>
                                <span><FaRegCalendarAlt size='5em' color='#d4d4d4'/></span>
                                <p>No tasks for today</p>
                            </Container>
                        </Jumbotron>
                    </Col>
                    <Col className="background2">
                        {this.props.children}
                    </Col>
                </Row>
    
            </section>
    )
  }
}