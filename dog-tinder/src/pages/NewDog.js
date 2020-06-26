import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'


const NewDog = (props) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
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
      return fetch("http://localhost:3000/dogs", {
        body: JSON.stringify(newdoggo),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      .then(response =>{
        if (response.status === 200){
          setSuccess(true)
        } else {
          setError(true)
        }
      })
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
        { success && <Redirect to = "/"/>}
        { error && <p>There was an error, try again</p>}

      </Form>
    )
}

export default NewDog
