import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading, Button } from 'reactstrap';

const DogIndex = () => {
  useEffect (() => {grabDogs()}, [])
    async function grabDogs() {
      try{
        let response = await fetch("http://localhost:3000/dogs")
        if (response.status === 200){
          let data = await response.json()
          setDogs(data)
        }
      } catch(err){
        console.log(err)
      }
    }
const [allDogs, setDogs] = useState()
    return(
        <>
        <Button className="btn btn-warning mb-2 float-right" href="/newdog">Add Some Doggos</Button>
        <br/>
        <br/>
          <ListGroup >
            { allDogs && allDogs.map((dog, index) => {
                return(
                    <ListGroupItem key= { index }>
                        <ListGroupItemHeading> { dog.name } </ListGroupItemHeading>
                        <ListGroupItemText>Age: { dog.age }</ListGroupItemText>
                        <ListGroupItemText>Enjoys: { dog.enjoys }</ListGroupItemText>
                        <img src= { dog.img } className = "dogphoto"/>
                    </ListGroupItem>
                )
            })}
          </ListGroup>
          <br/>
          <Button className="btn btn-warning mb-2 float-right" href="/newdog">Add Some Doggos</Button>



        </>
    )
}
export default DogIndex
