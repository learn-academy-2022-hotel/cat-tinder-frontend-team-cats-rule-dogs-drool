import React, { useState } from "react"
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {useNavigate, useParams} from 'react-router-dom'

const CatEdit = ({cats, updateCat}) => {
  const { id } = useParams()
  let currentCat = cats?.find(cat => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat?.name,
    age: currentCat?.age,
    enjoys: currentCat?.enjoys,
    image: currentCat?.image
  })

  const handleChange = (e) => {
    setEditCat({...editCat, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate("/catindex")
  }
  return (
  <>
    <h1>Edit Your Cat Information</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input 
            name="name" 
            type="text" 
            placeholder="Edit Name"
            onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input 
            name="age" 
            type="number" 
            placeholder="Edit Age"
            onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input 
            name="enjoys" 
            type="text" 
            placeholder="Edit Enjoys"
            onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input  
            name="image" 
            type="text" 
            placeholder="Edit Image"
            onChange={handleChange} />
        </FormGroup>
      </Form>
      <div>
        <Button
            size="lg"
            onClick={handleSubmit}
        >
          Submit Cat Update
        </Button>
      </div>
  </>
  );
}

export default CatEdit;