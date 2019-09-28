import React from 'react'
import NavbarComp from '../layout/Navbar'
import Hero from '../layout/Hero'
import {Jumbotron, Container, Button} from 'reactstrap'
const Home = () => {
    return (
        <div className="home-container">
            <NavbarComp />
            <Hero>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1>Hi!</h1>
                        <p>Nothing to do yet? Think about it and let start</p>
                        <Button outline color="secondary">Add Task</Button>
                    </Container>
                </Jumbotron>
            </Hero>
        </div>
    )
}

export default Home
