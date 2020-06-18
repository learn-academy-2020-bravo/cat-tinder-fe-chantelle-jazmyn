import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading, Button } from 'reactstrap';


const DogIndex = (props) => {
    return(
        <>
        
          <ListGroup >
            { props.doggos && props.doggos.map((dog, index) => {
                return(
                    <ListGroupItem key= { index }>
                        <ListGroupItemHeading> { dog.name } </ListGroupItemHeading>
                        <ListGroupItemText>Age: { dog.age }</ListGroupItemText>
                        <ListGroupItemText>Enjoys: { dog.enjoys }</ListGroupItemText>
                    </ListGroupItem> 
                )
            })}
          </ListGroup>
            <span>hello</span>
          <Button className="btn btn-warning mb-2 float-right" href="/newdog">Add Some Doggos</Button>

        
          
        </>
    )
}
export default DogIndex
