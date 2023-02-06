import React from "react"
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
} from "reactstrap"
import { NavLink } from "react-router-dom"


const CatIndex = ({cats}) => {
  return (
  <main className="catcard">
  {cats?.map((cat, index) => {
  return (
    <Card
    body 
    color="dark" 
    inverse
    style={{
    width: '18rem'
    }} 
    key={index}
    >
   <img
    alt="Sample"
    src={cat.image}
    />
  <CardBody>
    <CardTitle tag="h5"> <p>{cat.name}</p>
  </CardTitle>

  <CardSubtitle
      className="mb-2 text-muted"
      tag="h6">
      <p>Age: {cat.age}</p>
  </CardSubtitle>

  <div className="more-button">
  <NavLink to={`/catshow/${cat.id}`} className="nav-link">
  See More Details
</NavLink>
  </div>
    </CardBody>
</Card>
)
})}
</main>
)
}
export default CatIndex;