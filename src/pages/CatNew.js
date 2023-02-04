import React, { useState } from "react"
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {useNavigate} from 'react-router-dom'

const CatNew = ({createNewCat}) => {
  const [newCat, setNewCat] = useState({ 
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    createNewCat(newCat)
    navigate("/catindex")
  }

  return (
 <>
 <h1>Cat Submission Form</h1>
  <Form>
    <FormGroup>
      <Label for="name">
        Name
      </Label>
      <Input
        id="name"
        name="name"
        placeholder="Enter Name"
        type="text"
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="age">
        Age
      </Label>
      <Input
        id="age"
        name="age"
        placeholder="How young are you?"
        type="text"
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="enjoys">
        Enjoys
      </Label>
      <Input
        id="enjoys"
        name="enjoys"
        placeholder="We want to know you."
        type="text"
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="image">
        Image
      </Label>
      <Input
        id="image"
        name="image"
        placeholder="Image URL"
        type="text"
        onChange={handleChange}
      />
    </FormGroup>
  </Form>
  <div>
    <Button
      size="lg"
      onClick={handleSubmit}
    >
      Submit
    </Button>
  </div>
 </>
  );
}

export default CatNew;