import React from 'react'
import { Jumbotron, Container } from 'reactstrap';


const Header = () => {
    return(
        <>
        <Jumbotron fluid>
            <Container className="puppylove">
            <div className="logo">
                <img src="../img/puppylovelogo.png" height="200px"/>
            </div>
            <div className="title">
            <h1 className="display-3">Puppy Love</h1>
            <p className="lead">Cuz who doesn't love puppies?</p>
            </div></Container>
        </Jumbotron>
        </>
    )
}
export default Header