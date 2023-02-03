import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({cats}) => {
 const { id } = useParams()
 let currentCat = cats?.find((cat) => cat.id === +id)
 
 return (
  <main className="cat-show-cards">
    {currentCat && (
      <>
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