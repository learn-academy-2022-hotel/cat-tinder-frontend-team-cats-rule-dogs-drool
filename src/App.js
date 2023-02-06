import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import './App.css';
import './index.css';
//import mockCats from "./mockCats"
import { Routes, Route } from "react-router-dom"

const App = () => {

  useEffect(() => {readCats()}, [])

  const [cats, setCats] = useState([])

  // Fetches all the cats in our rails seeds.rb file
  const readCats = () => {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(payload => {
        setCats(payload)
      })
      .catch(errors => console.log(errors))
  }

  // Creates a new cat from form and adds to database
  const createNewCat = (newCatObject) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCatObject),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readCats())
      .catch(errors => console.log(errors))
  }
  
  // Edit exsisting cat from form and updates to database
  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {"Content-Type": "application/json"},
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => readCats())
      .catch(errors => console.log(errors))
  }
  return (
 <> 
 < Header /> 
 <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/catindex" element = {< CatIndex cats={cats} />} />
    <Route path="/catshow/:id" element = {< CatShow cats={cats} />} />
    <Route path="/catnew" element = {< CatNew createNewCat={createNewCat}/>} />
    <Route path="/catedit/:id" element = {<CatEdit cats={cats} updateCat={updateCat}/>} />
    <Route path="*" element = {< NotFound/>} />
 </Routes> 
 < Footer /> 
 
 </>
  );
  
};

export default App;
