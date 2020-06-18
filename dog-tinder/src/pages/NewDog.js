import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const NewDog = (props) => {
    const [dogs, setDogs] = useState([])
    const [form, setForm] = useState({
        name:'',
        age:'',
        enjoys:'',
        img:''
    })

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDogs(dogs => [...dogs,form])
        pushDogs(form)
    }

    const pushDogs = (newdoggo) => {
        console.log(newdoggo)
    }


    return (
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
          <Input type="text" name="name" placeholder="name go here" onChange={ handleChange } value={ form.name }/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age" id="age">Age</Label>
          <Input type="number" name="age" placeholder="age go here" onChange={ handleChange } value={ form.age }/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
          <Input type="text" name="enjoys" placeholder="tell me bout u" onChange={ handleChange } value={ form.enjoys }/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="img" id="img">Image URL</Label>
          <Input type="url" name="img" placeholder="" onChange={ handleChange } value={ form.img }/>
        </FormGroup>
        <Button name="submit" id="submit" onClick={ handleSubmit }>Submit</Button>


      </Form>
    )
} 

export default NewDog