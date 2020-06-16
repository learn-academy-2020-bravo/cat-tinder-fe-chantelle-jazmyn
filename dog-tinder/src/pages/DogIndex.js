import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';


const DogIndex = () => {
    return(
        <>
        <ListGroup >
        {this.props.dogs.map((dog, index) => {
            return(
                <ListGroupItem key= { index }>
                    <h4> { dog.name } </h4>
                    <p>Age: { dog.age }</p>
                    <p>Enjoys: { dog.enjoys }</p>
                </ListGroupItem>

            )
        })}
        </ListGroup>
        
        </>
    )
}
export default DogIndex