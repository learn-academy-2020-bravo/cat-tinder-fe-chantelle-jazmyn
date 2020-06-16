import React from 'react'
import { Jumbotron, Container } from 'reactstrap';


const Header = () => {
    return(
        <>
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Puppy Love</h1>
            <p className="lead">Cuz who doesn't love puppies?</p>
            </Container>
        </Jumbotron>
        </>
    )
}
export default Header