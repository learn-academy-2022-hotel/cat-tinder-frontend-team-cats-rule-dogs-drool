import React from "react"
import { useParams, NavLink } from "react-router-dom"


const CatShow = ({cats}) => {
 const { id } = useParams()
 let currentCat = cats?.find((cat) => cat.id === +id)
 
 return (
  <main className="cat-show-cards">
    {currentCat && (
      <>
        <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
                Edit Cat Profile
        </NavLink>
        <img
        alt= {`profile of a cat named ${currentCat.name}`}
        src={currentCat.image}
        className="cat-show-img"
        />
        <h3>Enjoys: {currentCat.enjoys}</h3>
      </>
    )}
    </main>
  );
}



export default CatShow;