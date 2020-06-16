import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';


const DogIndex = (props) => {
    return(
        <>
          <ListGroup >
            { props.dogs.map((dog, index) => {
                return(
                    <ListGroupItem key= { index }>
                        <ListGroupItemHeading> { dog.name } </ListGroupItemHeading>
                        <ListGroupItemText>Age: { dog.age }</ListGroupItemText>
                        <ListGroupItemText>Enjoys: { dog.enjoys }</ListGroupItemText>
                    </ListGroupItem>
                )
            })}
          </ListGroup>
        </>
    )
}
export default DogIndex
